Feature: Scrolling page
  I want be able to scroll page and see images and blocks

  Scenario: Going to Home page
    Given I am on Home page


  Scenario Outline: Scrolling page and check visible elements
      And '<screen>' should be visible
     Then I scroll down '<count>' time(s)
      And '<screen>' should be invisible

    Examples:
    |screen             |count|
    |desktop            |5.5 |
    |phonePicture       |1  |
    |sliding            |0.5  |
    |video_ctrl         |1.5|
    |features           |3  |
    |video              |4    |
    |soundtracks        |4  |
    |videolist          |4    |
    |creators           |4  |


