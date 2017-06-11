# LegislateMe
[Live App](#)

## Overview
In today's world of sound bytes and social media, it's often difficult to keep up with local policy.  LegislateMe, a mobile application built with React Native Django backend, aims to solve that problem.
LegislateMe curates state legislative data and allows users to easily follow local legislation with ease. Users can even filter bills by the subjects that are most
important for them, and email/call their representatives about specific bills straight from the application.

Our mission statement is to reduce the overhead necessary to get involved. It's as easy as pushing a button!

## Technologies
  LegislateMe pairs Redux data architecture with React Native for efficient, unidirectional data management and cross-mobile performant functionality. Django, chosen for its portability and well-organized documentation, served as the application's server-side web API.

  Third Party APIS involved:
    + [OpenStates](http://docs.openstates.org/en/latest/api/)
      - allows for curation of state data
    + [Pexel](https://www.pexels.com/api/)
      - provided images for application UX
    + [Google Maps Geocoding](https://developers.google.com/maps/documentation/javascript/geocoding)
      - allows user to enter address and receive lat/long points for user with OpenStates API
## Features
  ### OAuth integration
    + Nobody likes having to manually sign up. Luckily, LegislateMe integrates with Facebook's/Google's SDK in order to make authentication pain-free.
    **insert video of FB sign up/login here**
    **insert video of Google sign up/login here**

  ### Find your representative
    + Given geographic latitude/longitudinal coordinates, OpenStates API can return the representatives for that region. However, we recognize that most people wouldn't know off the top of their head what their geographic coordinates are. To solve this, LegislateMe asks users for their address (it isn't stored on the backend for privacy purposes), and routes the address through the Google Geocoding API. This returns the lat/long coordinates which can then be input into OpenStates. The representatives are then stored in our database for the current user.
    **Insert code snippet of running through both APIs**
  ### Contacting representatives within app
    + People are busy. When they come back from work, tired or hungry (probably both), the last thing on their list is reaching out to their representative about a particularly irritating bill.
    LegislateMe helps out. If a user is reading a bill that they feel particularly passionate about, they can call or email their representative from within the application. **Show the RepresentativeView**  
      + If the user chooses to email, a prefilled-email with the bill details and legislator's email address are populated and ready to send.
    ** Show prefilled email **
       + However, the option to call is also provided, in case the user wants to give a more personal touch. Hitting the call button will prefill the number with the legislator's phone number. **Show video of this happening**
    **IS THIS A CRON JOB OR WHAT ARE WE DOING TO DO**
  ### Following bills
    + It's too easy to lose track of bills that are important to you. LegislateMe allows users to bookmark bills that they'd like to follow. At any time in the future, users can check in on that bill to see it's status and whether it was signed into law.
    **Insert gif of saving a bill then going into bookmark view**

## Future Features
  Our team is excited to continue working on this project. Ultimately, we want LegislateMe to be the go-to place for political action at the state level. To do this, we look forward to a number of exciting engineering challenges:
    + Search any legislator by name in the state.
      - If users want to see a specific legislator's voting history or sponsored bills, we want to provide search functionality. This would entail storing OpenStates
  Push notifications when bookmarked bill changes state.
  View all bills proposed by a single legislator + voting history
