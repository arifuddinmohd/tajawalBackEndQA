package com.tajawal.featureImp;

import com.jayway.restassured.RestAssured;
import com.jayway.restassured.response.Response;
import cucumber.api.PendingException;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import org.junit.Assert;

import java.util.List;
import java.util.Map;
import java.util.Random;

public class hotelModuleStepDef {

    String baseURL = "https://www.tajawal.ae/";
    Response response = null;

    @Given("^user validate the GET Service response \"([^\"]*)\"$")
    public void validateGetServiceResponse(String url) throws Exception {
        this.baseURL = baseURL + url;

        response = RestAssured.given().relaxedHTTPSValidation().get(baseURL);
        if (response.getStatusCode() == 200) {
            System.out.println("Tajawa - Currency List api Service is responding as expected !!");
        } else {
            throw new Exception("Error in service response: " + response.getStatusCode());
        }
    }

    @Then("^user can able to validate the schema level equivalent object tags \"([^\"]*)\", \"([^\"]*)\", \"([^\"]*)\", \"([^\"]*)\", \"([^\"]*)\", \"([^\"]*)\", \"([^\"]*)\", \"([^\"]*)\", \"([^\"]*)\", \"([^\"]*)\", \"([^\"]*)\"$")
    public void userCanAbleToValidateTheSchemaLevelObjectTags(String symbol, String name, String name_ar, String symbol_native,
                                                              String decimal_digits, String rounding,
                                                              String code, String name_plural, String rate,
                                                              String Rate, String date) throws Throwable {

        List<Map<String, String>> equivalent = response.jsonPath().getList("equivalent");
        for (Map equi : equivalent) {
            Assert.assertTrue("symbol tag not exists", equi.containsKey(symbol));
            Assert.assertTrue("name tag not exists", equi.containsKey(name));
            Assert.assertTrue("name_ar tag not exists", equi.containsKey(name_ar));
            Assert.assertTrue("symbol_native tag not exists", equi.containsKey(symbol_native));
            Assert.assertTrue("decimal_digits tag not exists", equi.containsKey(decimal_digits));
            Assert.assertTrue("rounding tag not exists", equi.containsKey(rounding));
            Assert.assertTrue("code tag not exists", equi.containsKey(code));
            Assert.assertTrue("name_plural tag not exists", equi.containsKey(name_plural));
            Assert.assertTrue("rate tag not exists", equi.containsKey(rate));
            Assert.assertTrue("Rate tag not exists", equi.containsKey(Rate));
            Assert.assertTrue("date tag not exists", equi.containsKey(date));
        }
    }


    @When("^user validate the base level response$")
    public void userValidateTheBaseLevelResponse() throws Throwable {

        Map<String, String> baseLevel = response.jsonPath().get("base");
        Assert.assertTrue("symbol tag not exists", baseLevel.containsKey("symbol"));
        Assert.assertTrue("name tag not exists", baseLevel.containsKey("name"));
        Assert.assertTrue("name_ar tag not exists", baseLevel.containsKey("name_ar"));
        Assert.assertTrue("symbol_native tag not exists", baseLevel.containsKey("symbol_native"));
        Assert.assertTrue("decimal_digits tag not exists", baseLevel.containsKey("decimal_digits"));
        Assert.assertTrue("rounding tag not exists", baseLevel.containsKey("rounding"));
        Assert.assertTrue("code tag not exists", baseLevel.containsKey("code"));
        Assert.assertTrue("name_plural tag not exists", baseLevel.containsKey("name_plural"));
    }


}
