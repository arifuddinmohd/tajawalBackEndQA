package com.tajawal.runCukes;

import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;
import org.junit.runner.RunWith;

@RunWith(Cucumber.class)
@CucumberOptions(
        plugin = {"pretty", "html:target/html-reports/TC03_ValidateCalenderFareResponse",
                "json:target/cucumber-report/TC03_ValidateCalenderFareResponse.json"},
        features = {"src/main/resources/features/tajawalFlightsGetFareCalender.feature"},
        glue = {"com.tajawal.featureImp"},
        tags = {"@TC03_ValidateCalenderFareResponse"})

public class TC03_ValidateServiceResponseSchemaElements {
}
