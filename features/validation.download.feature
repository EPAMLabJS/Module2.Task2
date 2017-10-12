@important
Feature: Download page
  I want be able to click download and get info about app

  #@role(logged)
  Scenario: Validation details
    Given I am on Home page
     Then I click Download button
      And I wait page loaded
     Then Page title should be "Cameo - Video Editor and Movie Maker on the App Store"
      And Last update should be "Sep 12, 2016"
      And Version should be "2.3.1"
      And Size should be "120 MB"