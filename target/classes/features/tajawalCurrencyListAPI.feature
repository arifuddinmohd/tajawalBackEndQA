Feature: As a Backend QA I want to validate the schema and test data.

  @TC01_ValidateServiceResponse
  Scenario Outline: Verify the currency list api service response
    Given user validate the GET Service response "<baseURL>"

    Examples:
      | baseURL                   |
      | api/system/currency/list  |
      | api/system/currency/list1 |


  @TC02_ValidateServiceResponseSchemaElements
  Scenario Outline: Verify api service schema level object tags
    Given user validate the GET Service response "<baseURL>"
    When user validate the base level response
    Then user can able to validate the schema level equivalent object tags "<symbol>", "<name>", "<name_AR>", "<symbol_Native>", "<decimal_Digits>", "<rounding>", "<code>", "<name_Plural>", "<rate>", "<Rate>", "<date>"

    Examples:
      | baseURL                  | symbol | name | name_AR | symbol_Native | decimal_Digits | rounding | code | name_Plural | rate | Rate | date |
      | api/system/currency/list | symbol | name | name_ar | symbol_native | decimal_digits | rounding | code | name_plural | rate | Rate | date |
      | api/system/currency/list | symbol | name | name_a  | symbol_native | decimal_digits | rounding | code | name_plural | rate | Rate | date |