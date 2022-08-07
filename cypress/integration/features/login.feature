Feature: Login - Web Login Portal Page

  Scenario: Login using valid credencials
    Given I access the web login portal Page
    When I enter a username webdriver
    And I enter a password webdriver123
    And I click on the login button
    Then I should be presented with the following message validation succeeded
