$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("src/main/resources/features/tajawalCurrencyListAPI.feature");
formatter.feature({
  "line": 1,
  "name": "As a Backend QA I want to validate the schema and test data.",
  "description": "",
  "id": "as-a-backend-qa-i-want-to-validate-the-schema-and-test-data.",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 14,
  "name": "Verify api service schema level object tags",
  "description": "",
  "id": "as-a-backend-qa-i-want-to-validate-the-schema-and-test-data.;verify-api-service-schema-level-object-tags",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 13,
      "name": "@TC02_ValidateServiceResponseSchemaElements"
    }
  ]
});
formatter.step({
  "line": 15,
  "name": "user validate the GET Service response \"\u003cbaseURL\u003e\"",
  "keyword": "Given "
});
formatter.step({
  "line": 16,
  "name": "user validate the base level response",
  "keyword": "When "
});
formatter.step({
  "line": 17,
  "name": "user can able to validate the schema level equivalent object tags \"\u003csymbol\u003e\", \"\u003cname\u003e\", \"\u003cname_AR\u003e\", \"\u003csymbol_Native\u003e\", \"\u003cdecimal_Digits\u003e\", \"\u003crounding\u003e\", \"\u003ccode\u003e\", \"\u003cname_Plural\u003e\", \"\u003crate\u003e\", \"\u003cRate\u003e\", \"\u003cdate\u003e\"",
  "keyword": "Then "
});
formatter.examples({
  "line": 19,
  "name": "",
  "description": "",
  "id": "as-a-backend-qa-i-want-to-validate-the-schema-and-test-data.;verify-api-service-schema-level-object-tags;",
  "rows": [
    {
      "cells": [
        "baseURL",
        "symbol",
        "name",
        "name_AR",
        "symbol_Native",
        "decimal_Digits",
        "rounding",
        "code",
        "name_Plural",
        "rate",
        "Rate",
        "date"
      ],
      "line": 20,
      "id": "as-a-backend-qa-i-want-to-validate-the-schema-and-test-data.;verify-api-service-schema-level-object-tags;;1"
    },
    {
      "cells": [
        "api/system/currency/list",
        "symbol",
        "name",
        "name_ar",
        "symbol_native",
        "decimal_digits",
        "rounding",
        "code",
        "name_plural",
        "rate",
        "Rate",
        "date"
      ],
      "line": 21,
      "id": "as-a-backend-qa-i-want-to-validate-the-schema-and-test-data.;verify-api-service-schema-level-object-tags;;2"
    },
    {
      "cells": [
        "api/system/currency/list",
        "symbol",
        "name",
        "name_a",
        "symbol_native",
        "decimal_digits",
        "rounding",
        "code",
        "name_plural",
        "rate",
        "Rate",
        "date"
      ],
      "line": 22,
      "id": "as-a-backend-qa-i-want-to-validate-the-schema-and-test-data.;verify-api-service-schema-level-object-tags;;3"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 21,
  "name": "Verify api service schema level object tags",
  "description": "",
  "id": "as-a-backend-qa-i-want-to-validate-the-schema-and-test-data.;verify-api-service-schema-level-object-tags;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 13,
      "name": "@TC02_ValidateServiceResponseSchemaElements"
    }
  ]
});
formatter.step({
  "line": 15,
  "name": "user validate the GET Service response \"api/system/currency/list\"",
  "matchedColumns": [
    0
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 16,
  "name": "user validate the base level response",
  "keyword": "When "
});
formatter.step({
  "line": 17,
  "name": "user can able to validate the schema level equivalent object tags \"symbol\", \"name\", \"name_ar\", \"symbol_native\", \"decimal_digits\", \"rounding\", \"code\", \"name_plural\", \"rate\", \"Rate\", \"date\"",
  "matchedColumns": [
    1,
    2,
    3,
    4,
    5,
    6,
    7,
    8,
    9,
    10,
    11
  ],
  "keyword": "Then "
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
  "duration": 2438323100,
  "status": "passed"
});
formatter.match({
  "location": "hotelModuleStepDef.userValidateTheBaseLevelResponse()"
});
formatter.result({
  "duration": 655931000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "symbol",
      "offset": 67
    },
    {
      "val": "name",
      "offset": 77
    },
    {
      "val": "name_ar",
      "offset": 85
    },
    {
      "val": "symbol_native",
      "offset": 96
    },
    {
      "val": "decimal_digits",
      "offset": 113
    },
    {
      "val": "rounding",
      "offset": 131
    },
    {
      "val": "code",
      "offset": 143
    },
    {
      "val": "name_plural",
      "offset": 151
    },
    {
      "val": "rate",
      "offset": 166
    },
    {
      "val": "Rate",
      "offset": 174
    },
    {
      "val": "date",
      "offset": 182
    }
  ],
  "location": "hotelModuleStepDef.userCanAbleToValidateTheSchemaLevelObjectTags(String,String,String,String,String,String,String,String,String,String,String)"
});
formatter.result({
  "duration": 19453100,
  "status": "passed"
});
formatter.scenario({
  "line": 22,
  "name": "Verify api service schema level object tags",
  "description": "",
  "id": "as-a-backend-qa-i-want-to-validate-the-schema-and-test-data.;verify-api-service-schema-level-object-tags;;3",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 13,
      "name": "@TC02_ValidateServiceResponseSchemaElements"
    }
  ]
});
formatter.step({
  "line": 15,
  "name": "user validate the GET Service response \"api/system/currency/list\"",
  "matchedColumns": [
    0
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 16,
  "name": "user validate the base level response",
  "keyword": "When "
});
formatter.step({
  "line": 17,
  "name": "user can able to validate the schema level equivalent object tags \"symbol\", \"name\", \"name_a\", \"symbol_native\", \"decimal_digits\", \"rounding\", \"code\", \"name_plural\", \"rate\", \"Rate\", \"date\"",
  "matchedColumns": [
    1,
    2,
    3,
    4,
    5,
    6,
    7,
    8,
    9,
    10,
    11
  ],
  "keyword": "Then "
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
  "duration": 230380600,
  "status": "passed"
});
formatter.match({
  "location": "hotelModuleStepDef.userValidateTheBaseLevelResponse()"
});
formatter.result({
  "duration": 13973100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "symbol",
      "offset": 67
    },
    {
      "val": "name",
      "offset": 77
    },
    {
      "val": "name_a",
      "offset": 85
    },
    {
      "val": "symbol_native",
      "offset": 95
    },
    {
      "val": "decimal_digits",
      "offset": 112
    },
    {
      "val": "rounding",
      "offset": 130
    },
    {
      "val": "code",
      "offset": 142
    },
    {
      "val": "name_plural",
      "offset": 150
    },
    {
      "val": "rate",
      "offset": 165
    },
    {
      "val": "Rate",
      "offset": 173
    },
    {
      "val": "date",
      "offset": 181
    }
  ],
  "location": "hotelModuleStepDef.userCanAbleToValidateTheSchemaLevelObjectTags(String,String,String,String,String,String,String,String,String,String,String)"
});
formatter.result({
  "duration": 60748300,
  "error_message": "java.lang.AssertionError: name_ar tag not exists\r\n\tat org.junit.Assert.fail(Assert.java:88)\r\n\tat org.junit.Assert.assertTrue(Assert.java:41)\r\n\tat com.tajawal.featureImp.hotelModuleStepDef.userCanAbleToValidateTheSchemaLevelObjectTags(hotelModuleStepDef.java:42)\r\n\tat ✽.Then user can able to validate the schema level equivalent object tags \"symbol\", \"name\", \"name_a\", \"symbol_native\", \"decimal_digits\", \"rounding\", \"code\", \"name_plural\", \"rate\", \"Rate\", \"date\"(src/main/resources/features/tajawalCurrencyListAPI.feature:17)\r\n",
  "status": "failed"
});
});