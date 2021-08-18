package com.tajawal.featureImp;

import com.jayway.restassured.RestAssured;
import com.jayway.restassured.response.Response;
import com.tajawal.servicesImp.CalenderFareService;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import org.junit.Assert;
import java.util.*;

public class flightModuleStepDef {

    Response response;
    CalenderFareService calenderFareService = new CalenderFareService();
    String baseURL = "https://www.tajawal.ae/api/v3/flights/flight/get-fares-calender";

    @Given("^user hit the calender fare service \"([^\"]*)\", \"([^\"]*)\", \"([^\"]*)\", \"([^\"]*)\", \"([^\"]*)\", \"([^\"]*)\", \"([^\"]*)\"$")
    public void userHitTheFareCalenderService(String sector, String depArrDate, String cabin, String pax, String stops, String airline, String airports) throws Throwable {
        Map<String, String> header = new HashMap<>();
        header.put("Content-Type", "application/json");

        String request = calenderFareService.getCalenderFareRequest(sector, depArrDate, cabin, pax, stops, airline, airports);
        response = RestAssured.given().relaxedHTTPSValidation().headers(header).body(request).when().post(baseURL);
        System.out.println("response ::::: " + response.prettyPrint());

    }

    @When("^user parse the validate the service response$")
    public void userParseTheValidateTheServiceResponse() throws Throwable {
        try {
            if (response.getStatusCode() == 200) {
                System.out.println("Service is Rendering");
            } else {
                throw new Exception("Service is not working as expected, need to investiage." + response.getStatusCode() + response.prettyPrint());
            }
        } catch (Exception e) {
            e.printStackTrace();
        }
    }

    @Then("^user validate the calender fare information for the specific OD's$")
    public void userValidateTheCalenderFareInformationForTheSpecificODS() throws Throwable {

        try {
            Map<String, String> fareCalender = response.jsonPath().get();
            for (Map.Entry fareList : fareCalender.entrySet()) {
                Map<String, String> listPrice = (HashMap) fareList.getValue();

                for (Map.Entry list : listPrice.entrySet()) {
                    System.out.println(list.getKey() + " : " + list.getValue());
                    if (list.getKey().equals("price")) {
                        Assert.assertTrue("price tag not exists", "price".equals(list.getKey()));
                    } else if (list.getKey().equals("updatedAt")) {
                        Assert.assertTrue("updatedAt tag not exists", "updatedAt".equals(list.getKey()));
                    } else {
                        throw new Exception("Expected Calender Fare Object level tag's not found: " + list.getKey());
                    }
                }
            }
        } catch (ClassCastException e) {
            throw new Exception(e + " API Response :" + response.prettyPrint());
        }
    }

}
