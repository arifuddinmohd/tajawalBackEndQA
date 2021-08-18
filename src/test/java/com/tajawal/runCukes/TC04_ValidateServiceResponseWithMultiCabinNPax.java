package com.tajawal.runCukes;

import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;
import org.junit.runner.RunWith;

@RunWith(Cucumber.class)
@CucumberOptions(
        plugin = {"pretty", "html:target/html-reports/TC04_ValidateServiceResponseWithMultiCabinNPax",
                "json:target/cucumber-report/TC04_ValidateServiceResponseWithMultiCabinNPax.json"},
        features = {"src/main/resources/features/tajawalFlightsGetFareCalender.feature"},
        glue = {"com.tajawal.featureImp"},
        tags = {"@TC04_ValidateServiceResponseWithMultiCabinNPax"})

public class TC04_ValidateServiceResponseWithMultiCabinNPax {
}
