**Testing Feature for Currency List and Calender Fare api Service.**

Feature 1: To Validate Currency List API Service as a backend QA.
Scenario 1: Verify the currency list api service response
TestCase1: Validate the Service Response with positive test Data
TestCase2: Validate the Service Response with Negative test Data

Scenario 2: Verify api service schema level object tags 
TestCase1: Validate the Service Response Object Level tag's with below fields.
| symbol | name | name_ar | symbol_native | decimal_digits | rounding | code | name_plural | rate | Rate | date |

TestCase2: Validate the Service Response Object level tag's with
|symbol | name | name_a  | symbol_native | decimal_digits | rounding | code | name_plural | rate | Rate | date |

Feature 2: To Validate Flight Calender Fare Service.
Scenario 1: Verify calender fare Service information for specific OD's
TestCase1-7: Validate the calender fare service response for single segment,Economy, depArrDate beyond 365 days and with multi pax.

Scenario 2: Verify calender fare service response with negative scenarios
TestCase1: Validate the calender fare service response for diff cabin class.

**Execution Steps:**

1. Navigate to folder "com.tajawal.runCukes" and Execute the Scenario no 1 and 2 for Currency list service.
2. Navigate to folder "com.tajawal.runCukes" and Execute the Scenario no 3 and 4 for Calender Fare Service.

**Reporting Log:**

1. Navigate to the below target location for reports.
     target > html-reports > TC's folder for reports logs.
     
**Framework Implementation:** 
 
  1. It's a Maven project integrated with Junit, Cucumber and restAssure.
  2. Programming language used JAVA.  
   
