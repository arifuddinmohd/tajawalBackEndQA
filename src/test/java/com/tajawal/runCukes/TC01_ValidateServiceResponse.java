package com.tajawal.runCukes;

import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;
import org.junit.runner.RunWith;

@RunWith(Cucumber.class)
@CucumberOptions(
        plugin = {"pretty", "html:target/html-reports/TC01_ValidateServiceResponse",
                "json:target/cucumber-report/TC01_ValidateServiceResponse.json"},
        features = {"src/main/resources/features/tajawalCurrencyListAPI.feature"},
        glue = {"com.tajawal.featureImp"},
        tags = {"@TC01_ValidateServiceResponse"})

public class TC01_ValidateServiceResponse {
}
