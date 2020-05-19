Feature: Shein Shopping

  Scenario: Page 1
    Given launch chrome browser
    And enter URL
    When search for the product
    Then click search and go to next page 
    
   Scenario: Page 2
    When click on the desired product
    
   Scenario: Page 3
    Given window handle
    When click on add to bag
    