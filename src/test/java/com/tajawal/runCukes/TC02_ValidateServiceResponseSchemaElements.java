package com.tajawal.runCukes;

import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;
import org.junit.runner.RunWith;

@RunWith(Cucumber.class)
@CucumberOptions(
        plugin = {"pretty", "html:target/html-reports/TC02_ValidateServiceResponseSchemaElements",
                "json:target/cucumber-report/TC02_ValidateServiceResponseSchemaElements.json"},
        features = {"src/main/resources/features/tajawalCurrencyListAPI.feature"},
        glue = {"com.tajawal.featureImp"},
        tags = {"@TC02_ValidateServiceResponseSchemaElements"})

public class TC02_ValidateServiceResponseSchemaElements {
}
