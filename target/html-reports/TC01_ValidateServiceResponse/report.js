$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("src/main/resources/features/tajawalCurrencyListAPI.feature");
formatter.feature({
  "line": 1,
  "name": "As a Backend QA I want to validate the schema and test data.",
  "description": "",
  "id": "as-a-backend-qa-i-want-to-validate-the-schema-and-test-data.",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 4,
  "name": "Verify the currency list api service response",
  "description": "",
  "id": "as-a-backend-qa-i-want-to-validate-the-schema-and-test-data.;verify-the-currency-list-api-service-response",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 3,
      "name": "@TC01_ValidateServiceResponse"
    }
  ]
});
formatter.step({
  "line": 5,
  "name": "user validate the GET Service response \"\u003cbaseURL\u003e\"",
  "keyword": "Given "
});
formatter.examples({
  "line": 7,
  "name": "",
  "description": "",
  "id": "as-a-backend-qa-i-want-to-validate-the-schema-and-test-data.;verify-the-currency-list-api-service-response;",
  "rows": [
    {
      "cells": [
        "baseURL"
      ],
      "line": 8,
      "id": "as-a-backend-qa-i-want-to-validate-the-schema-and-test-data.;verify-the-currency-list-api-service-response;;1"
    },
    {
      "cells": [
        "api/system/currency/list"
      ],
      "line": 9,
      "id": "as-a-backend-qa-i-want-to-validate-the-schema-and-test-data.;verify-the-currency-list-api-service-response;;2"
    },
    {
      "cells": [
        "api/system/currency/list1"
      ],
      "line": 10,
      "id": "as-a-backend-qa-i-want-to-validate-the-schema-and-test-data.;verify-the-currency-list-api-service-response;;3"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 9,
  "name": "Verify the currency list api service response",
  "description": "",
  "id": "as-a-backend-qa-i-want-to-validate-the-schema-and-test-data.;verify-the-currency-list-api-service-response;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 3,
      "name": "@TC01_ValidateServiceResponse"
    }
  ]
});
formatter.step({
  "line": 5,
  "name": "user validate the GET Service response \"api/system/currency/list\"",
  "matchedColumns": [
    0
  ],
  "keyword": "Given "
});
formatter.match({
  "arguments": [
    {
      "val": "api/system/currency/list",
      "offset": 40
    }
  ],
  "location": "hotelModuleStepDef.validateGetServiceResponse(String)"
});
formatter.result({
  "duration": 2756577400,
  "status": "passed"
});
formatter.scenario({
  "line": 10,
  "name": "Verify the currency list api service response",
  "description": "",
  "id": "as-a-backend-qa-i-want-to-validate-the-schema-and-test-data.;verify-the-currency-list-api-service-response;;3",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 3,
      "name": "@TC01_ValidateServiceResponse"
    }
  ]
});
formatter.step({
  "line": 5,
  "name": "user validate the GET Service response \"api/system/currency/list1\"",
  "matchedColumns": [
    0
  ],
  "keyword": "Given "
});
formatter.match({
  "arguments": [
    {
      "val": "api/system/currency/list1",
      "offset": 40
    }
  ],
  "location": "hotelModuleStepDef.validateGetServiceResponse(String)"
});
formatter.result({
  "duration": 667888700,
  "error_message": "java.lang.Exception: Error in service response: 404\r\n\tat com.tajawal.featureImp.hotelModuleStepDef.validateGetServiceResponse(hotelModuleStepDef.java:28)\r\n\tat ✽.Given user validate the GET Service response \"api/system/currency/list1\"(src/main/resources/features/tajawalCurrencyListAPI.feature:5)\r\n",
  "status": "failed"
});
});