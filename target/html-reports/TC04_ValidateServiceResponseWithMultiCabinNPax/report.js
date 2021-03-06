$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("src/main/resources/features/tajawalFlightsGetFareCalender.feature");
formatter.feature({
  "line": 1,
  "name": "As a BackEnd QA i want to validate the Flight Calendar Fare for OD\u0027s.",
  "description": "",
  "id": "as-a-backend-qa-i-want-to-validate-the-flight-calendar-fare-for-od\u0027s.",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 22,
  "name": "Verify calender fare service response with negative scenarios",
  "description": "",
  "id": "as-a-backend-qa-i-want-to-validate-the-flight-calendar-fare-for-od\u0027s.;verify-calender-fare-service-response-with-negative-scenarios",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 21,
      "name": "@TC04_ValidateServiceResponseWithMultiCabinNPax"
    }
  ]
});
formatter.step({
  "line": 24,
  "name": "user hit the calender fare service \"\u003csector\u003e\", \"\u003cdepartureDate\u003e\", \"\u003ccabin\u003e\", \"\u003cpax\u003e\", \"\u003cstops\u003e\", \"\u003cairline\u003e\", \"\u003cairports\u003e\"",
  "keyword": "Given "
});
formatter.step({
  "line": 25,
  "name": "user parse the validate the service response",
  "keyword": "When "
});
formatter.step({
  "line": 26,
  "name": "user validate the calender fare information for the specific OD\u0027s",
  "keyword": "Then "
});
formatter.examples({
  "line": 28,
  "name": "",
  "description": "",
  "id": "as-a-backend-qa-i-want-to-validate-the-flight-calendar-fare-for-od\u0027s.;verify-calender-fare-service-response-with-negative-scenarios;",
  "rows": [
    {
      "cells": [
        "sector",
        "departureDate",
        "cabin",
        "pax",
        "stops",
        "airline",
        "airports"
      ],
      "line": 29,
      "id": "as-a-backend-qa-i-want-to-validate-the-flight-calendar-fare-for-od\u0027s.;verify-calender-fare-service-response-with-negative-scenarios;;1"
    },
    {
      "cells": [
        "DXB-HYD",
        "1-10",
        "Business",
        "1ADT0CNN0INF",
        "0",
        "6E",
        "DUBAI-HYDERABAD"
      ],
      "line": 30,
      "id": "as-a-backend-qa-i-want-to-validate-the-flight-calendar-fare-for-od\u0027s.;verify-calender-fare-service-response-with-negative-scenarios;;2"
    },
    {
      "cells": [
        "HYD-DXB",
        "3-6",
        "Business",
        "8ADT0CNN0INF",
        "0",
        "6E",
        "HYDERABAD-DUBAI"
      ],
      "line": 31,
      "id": "as-a-backend-qa-i-want-to-validate-the-flight-calendar-fare-for-od\u0027s.;verify-calender-fare-service-response-with-negative-scenarios;;3"
    },
    {
      "cells": [
        "DXB-BOM",
        "1-5",
        "First",
        "1ADT2CNN0INF",
        "0",
        "EK",
        "DUBAI-BOMBAY"
      ],
      "line": 32,
      "id": "as-a-backend-qa-i-want-to-validate-the-flight-calendar-fare-for-od\u0027s.;verify-calender-fare-service-response-with-negative-scenarios;;4"
    },
    {
      "cells": [
        "DXB-DEL",
        "1-4",
        "Economy",
        "1ADT0CNN9INF",
        "0",
        "EK",
        "DUBAI-DELHI"
      ],
      "line": 33,
      "id": "as-a-backend-qa-i-want-to-validate-the-flight-calendar-fare-for-od\u0027s.;verify-calender-fare-service-response-with-negative-scenarios;;5"
    },
    {
      "cells": [
        "BOM-DXB-LHR",
        "5-12-7",
        "Economy",
        "1ADT0CNN0INF",
        "0",
        "6E",
        "BOMBAY-DUBAI-LONDON"
      ],
      "line": 34,
      "id": "as-a-backend-qa-i-want-to-validate-the-flight-calendar-fare-for-od\u0027s.;verify-calender-fare-service-response-with-negative-scenarios;;6"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 30,
  "name": "Verify calender fare service response with negative scenarios",
  "description": "",
  "id": "as-a-backend-qa-i-want-to-validate-the-flight-calendar-fare-for-od\u0027s.;verify-calender-fare-service-response-with-negative-scenarios;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 21,
      "name": "@TC04_ValidateServiceResponseWithMultiCabinNPax"
    }
  ]
});
formatter.step({
  "line": 24,
  "name": "user hit the calender fare service \"DXB-HYD\", \"1-10\", \"Business\", \"1ADT0CNN0INF\", \"0\", \"6E\", \"DUBAI-HYDERABAD\"",
  "matchedColumns": [
    0,
    1,
    2,
    3,
    4,
    5,
    6
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 25,
  "name": "user parse the validate the service response",
  "keyword": "When "
});
formatter.step({
  "line": 26,
  "name": "user validate the calender fare information for the specific OD\u0027s",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "DXB-HYD",
      "offset": 36
    },
    {
      "val": "1-10",
      "offset": 47
    },
    {
      "val": "Business",
      "offset": 55
    },
    {
      "val": "1ADT0CNN0INF",
      "offset": 67
    },
    {
      "val": "0",
      "offset": 83
    },
    {
      "val": "6E",
      "offset": 88
    },
    {
      "val": "DUBAI-HYDERABAD",
      "offset": 94
    }
  ],
  "location": "flightModuleStepDef.userHitTheFareCalenderService(String,String,String,String,String,String,String)"
});
formatter.result({
  "duration": 3227958500,
  "status": "passed"
});
formatter.match({
  "location": "flightModuleStepDef.userParseTheValidateTheServiceResponse()"
});
formatter.result({
  "duration": 101200,
  "status": "passed"
});
formatter.match({
  "location": "flightModuleStepDef.userValidateTheCalenderFareInformationForTheSpecificODS()"
});
formatter.result({
  "duration": 78449700,
  "error_message": "java.lang.Exception: java.lang.ClassCastException: java.util.ArrayList cannot be cast to java.util.Map API Response :[\n    \n]\r\n\tat com.tajawal.featureImp.flightModuleStepDef.userValidateTheCalenderFareInformationForTheSpecificODS(flightModuleStepDef.java:62)\r\n\tat ???.Then user validate the calender fare information for the specific OD\u0027s(src/main/resources/features/tajawalFlightsGetFareCalender.feature:26)\r\n",
  "status": "failed"
});
formatter.scenario({
  "line": 31,
  "name": "Verify calender fare service response with negative scenarios",
  "description": "",
  "id": "as-a-backend-qa-i-want-to-validate-the-flight-calendar-fare-for-od\u0027s.;verify-calender-fare-service-response-with-negative-scenarios;;3",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 21,
      "name": "@TC04_ValidateServiceResponseWithMultiCabinNPax"
    }
  ]
});
formatter.step({
  "line": 24,
  "name": "user hit the calender fare service \"HYD-DXB\", \"3-6\", \"Business\", \"8ADT0CNN0INF\", \"0\", \"6E\", \"HYDERABAD-DUBAI\"",
  "matchedColumns": [
    0,
    1,
    2,
    3,
    4,
    5,
    6
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 25,
  "name": "user parse the validate the service response",
  "keyword": "When "
});
formatter.step({
  "line": 26,
  "name": "user validate the calender fare information for the specific OD\u0027s",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "HYD-DXB",
      "offset": 36
    },
    {
      "val": "3-6",
      "offset": 47
    },
    {
      "val": "Business",
      "offset": 54
    },
    {
      "val": "8ADT0CNN0INF",
      "offset": 66
    },
    {
      "val": "0",
      "offset": 82
    },
    {
      "val": "6E",
      "offset": 87
    },
    {
      "val": "HYDERABAD-DUBAI",
      "offset": 93
    }
  ],
  "location": "flightModuleStepDef.userHitTheFareCalenderService(String,String,String,String,String,String,String)"
});
formatter.result({
  "duration": 672661900,
  "status": "passed"
});
formatter.match({
  "location": "flightModuleStepDef.userParseTheValidateTheServiceResponse()"
});
formatter.result({
  "duration": 45300,
  "status": "passed"
});
formatter.match({
  "location": "flightModuleStepDef.userValidateTheCalenderFareInformationForTheSpecificODS()"
});
formatter.result({
  "duration": 737100,
  "error_message": "java.lang.Exception: java.lang.ClassCastException: java.util.ArrayList cannot be cast to java.util.Map API Response :[\n    \n]\r\n\tat com.tajawal.featureImp.flightModuleStepDef.userValidateTheCalenderFareInformationForTheSpecificODS(flightModuleStepDef.java:62)\r\n\tat ???.Then user validate the calender fare information for the specific OD\u0027s(src/main/resources/features/tajawalFlightsGetFareCalender.feature:26)\r\n",
  "status": "failed"
});
formatter.scenario({
  "line": 32,
  "name": "Verify calender fare service response with negative scenarios",
  "description": "",
  "id": "as-a-backend-qa-i-want-to-validate-the-flight-calendar-fare-for-od\u0027s.;verify-calender-fare-service-response-with-negative-scenarios;;4",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 21,
      "name": "@TC04_ValidateServiceResponseWithMultiCabinNPax"
    }
  ]
});
formatter.step({
  "line": 24,
  "name": "user hit the calender fare service \"DXB-BOM\", \"1-5\", \"First\", \"1ADT2CNN0INF\", \"0\", \"EK\", \"DUBAI-BOMBAY\"",
  "matchedColumns": [
    0,
    1,
    2,
    3,
    4,
    5,
    6
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 25,
  "name": "user parse the validate the service response",
  "keyword": "When "
});
formatter.step({
  "line": 26,
  "name": "user validate the calender fare information for the specific OD\u0027s",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "DXB-BOM",
      "offset": 36
    },
    {
      "val": "1-5",
      "offset": 47
    },
    {
      "val": "First",
      "offset": 54
    },
    {
      "val": "1ADT2CNN0INF",
      "offset": 63
    },
    {
      "val": "0",
      "offset": 79
    },
    {
      "val": "EK",
      "offset": 84
    },
    {
      "val": "DUBAI-BOMBAY",
      "offset": 90
    }
  ],
  "location": "flightModuleStepDef.userHitTheFareCalenderService(String,String,String,String,String,String,String)"
});
formatter.result({
  "duration": 396237700,
  "status": "passed"
});
formatter.match({
  "location": "flightModuleStepDef.userParseTheValidateTheServiceResponse()"
});
formatter.result({
  "duration": 67900,
  "status": "passed"
});
formatter.match({
  "location": "flightModuleStepDef.userValidateTheCalenderFareInformationForTheSpecificODS()"
});
formatter.result({
  "duration": 689800,
  "error_message": "java.lang.Exception: java.lang.ClassCastException: java.util.ArrayList cannot be cast to java.util.Map API Response :[\n    \n]\r\n\tat com.tajawal.featureImp.flightModuleStepDef.userValidateTheCalenderFareInformationForTheSpecificODS(flightModuleStepDef.java:62)\r\n\tat ???.Then user validate the calender fare information for the specific OD\u0027s(src/main/resources/features/tajawalFlightsGetFareCalender.feature:26)\r\n",
  "status": "failed"
});
formatter.scenario({
  "line": 33,
  "name": "Verify calender fare service response with negative scenarios",
  "description": "",
  "id": "as-a-backend-qa-i-want-to-validate-the-flight-calendar-fare-for-od\u0027s.;verify-calender-fare-service-response-with-negative-scenarios;;5",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 21,
      "name": "@TC04_ValidateServiceResponseWithMultiCabinNPax"
    }
  ]
});
formatter.step({
  "line": 24,
  "name": "user hit the calender fare service \"DXB-DEL\", \"1-4\", \"Economy\", \"1ADT0CNN9INF\", \"0\", \"EK\", \"DUBAI-DELHI\"",
  "matchedColumns": [
    0,
    1,
    2,
    3,
    4,
    5,
    6
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 25,
  "name": "user parse the validate the service response",
  "keyword": "When "
});
formatter.step({
  "line": 26,
  "name": "user validate the calender fare information for the specific OD\u0027s",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "DXB-DEL",
      "offset": 36
    },
    {
      "val": "1-4",
      "offset": 47
    },
    {
      "val": "Economy",
      "offset": 54
    },
    {
      "val": "1ADT0CNN9INF",
      "offset": 65
    },
    {
      "val": "0",
      "offset": 81
    },
    {
      "val": "EK",
      "offset": 86
    },
    {
      "val": "DUBAI-DELHI",
      "offset": 92
    }
  ],
  "location": "flightModuleStepDef.userHitTheFareCalenderService(String,String,String,String,String,String,String)"
});
formatter.result({
  "duration": 692525100,
  "status": "passed"
});
formatter.match({
  "location": "flightModuleStepDef.userParseTheValidateTheServiceResponse()"
});
formatter.result({
  "duration": 60500,
  "status": "passed"
});
formatter.match({
  "location": "flightModuleStepDef.userValidateTheCalenderFareInformationForTheSpecificODS()"
});
formatter.result({
  "duration": 14648800,
  "status": "passed"
});
formatter.scenario({
  "line": 34,
  "name": "Verify calender fare service response with negative scenarios",
  "description": "",
  "id": "as-a-backend-qa-i-want-to-validate-the-flight-calendar-fare-for-od\u0027s.;verify-calender-fare-service-response-with-negative-scenarios;;6",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 21,
      "name": "@TC04_ValidateServiceResponseWithMultiCabinNPax"
    }
  ]
});
formatter.step({
  "line": 24,
  "name": "user hit the calender fare service \"BOM-DXB-LHR\", \"5-12-7\", \"Economy\", \"1ADT0CNN0INF\", \"0\", \"6E\", \"BOMBAY-DUBAI-LONDON\"",
  "matchedColumns": [
    0,
    1,
    2,
    3,
    4,
    5,
    6
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 25,
  "name": "user parse the validate the service response",
  "keyword": "When "
});
formatter.step({
  "line": 26,
  "name": "user validate the calender fare information for the specific OD\u0027s",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "BOM-DXB-LHR",
      "offset": 36
    },
    {
      "val": "5-12-7",
      "offset": 51
    },
    {
      "val": "Economy",
      "offset": 61
    },
    {
      "val": "1ADT0CNN0INF",
      "offset": 72
    },
    {
      "val": "0",
      "offset": 88
    },
    {
      "val": "6E",
      "offset": 93
    },
    {
      "val": "BOMBAY-DUBAI-LONDON",
      "offset": 99
    }
  ],
  "location": "flightModuleStepDef.userHitTheFareCalenderService(String,String,String,String,String,String,String)"
});
formatter.result({
  "duration": 384865500,
  "status": "passed"
});
formatter.match({
  "location": "flightModuleStepDef.userParseTheValidateTheServiceResponse()"
});
formatter.result({
  "duration": 43500,
  "status": "passed"
});
formatter.match({
  "location": "flightModuleStepDef.userValidateTheCalenderFareInformationForTheSpecificODS()"
});
formatter.result({
  "duration": 551300,
  "error_message": "java.lang.Exception: java.lang.ClassCastException: java.util.ArrayList cannot be cast to java.util.Map API Response :[\n    \n]\r\n\tat com.tajawal.featureImp.flightModuleStepDef.userValidateTheCalenderFareInformationForTheSpecificODS(flightModuleStepDef.java:62)\r\n\tat ???.Then user validate the calender fare information for the specific OD\u0027s(src/main/resources/features/tajawalFlightsGetFareCalender.feature:26)\r\n",
  "status": "failed"
});
});