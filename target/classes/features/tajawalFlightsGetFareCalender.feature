Feature: As a BackEnd QA i want to validate the Flight Calendar Fare for OD's.

  @TC03_ValidateCalenderFareResponse
  Scenario Outline: Verify calendar fare Service information for specific OD's

    Given user hit the calender fare service "<sector>", "<departureDate>", "<cabin>", "<pax>", "<stops>", "<airline>", "<airports>"
    When user parse the validate the service response
    Then user validate the calender fare information for the specific OD's

    Examples:
      | sector  | departureDate | cabin   | pax          | stops | airline | airports        |
      | DXB-HYD | 1-1000        | Economy | 1ADT0CNN0INF | 0     | 6E      | DUBAI-HYDERABAD |
      | HYD-DXB | 5-5           | Economy | 2ADT0CNN0INF | 0     | 6E      | HYDERABAD-DUBAI |
      | DXB-BOM | 3-9           | Economy | 1ADT2CNN0INF | 0     | EK      | DUBAI-BOMBAY    |
      | DXB-HYD | 15-30         | Economy | 2ADT1CNN0INF | 0     | EK      | DUBAI-HYDERABAD |
      | DXB-BOM | 8-90          | Economy | 1ADT2CNN0INF | 0     | EK      | DUBAI-BOMBAY    |
      | BOM-DXB | 8-90          | Economy | 1ADT2CNN0INF | 0     | EK      | BOMBAY-DUBAI    |
      | DXB-DEL | 5-12          | Economy | 3ADT1CNN0INF | 0     | 6E      | DUBAI-DELHI     |


  @TC04_ValidateServiceResponseWithMultiCabinNPax
  Scenario Outline: Verify calender fare service response with negative scenarios

    Given user hit the calender fare service "<sector>", "<departureDate>", "<cabin>", "<pax>", "<stops>", "<airline>", "<airports>"
    When user parse the validate the service response
    Then user validate the calender fare information for the specific OD's

    Examples:
      | sector      | departureDate | cabin    | pax          | stops | airline | airports            |
      | DXB-HYD     | 1-10          | Business | 1ADT0CNN0INF | 0     | 6E      | DUBAI-HYDERABAD     |
      | HYD-DXB     | 3-6           | Business | 8ADT0CNN0INF | 0     | 6E      | HYDERABAD-DUBAI     |
      | DXB-BOM     | 1-5           | First    | 1ADT2CNN0INF | 0     | EK      | DUBAI-BOMBAY        |
      | DXB-DEL     | 1-4           | Economy  | 1ADT0CNN9INF | 0     | EK      | DUBAI-DELHI         |
      | BOM-DXB-LHR | 5-12-7        | Economy  | 1ADT0CNN0INF | 0     | 6E      | BOMBAY-DUBAI-LONDON |