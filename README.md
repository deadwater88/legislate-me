# LegislateMe
[Our Demo Page](http://www.legislateme.com)

## Overview
In today's world of sound bites and social media, it's difficult to keep up with local policy.  LegislateMe, a mobile application built with React Native and a Django backend, aims to solve that problem.

LegislateMe curates state legislative data and allows users to easily follow local legislation. Users can filter bills by the subjects that are most
important to them, and email/call their representatives about specific bills from the application.

Our mission statement is to reduce the effort needed to get involved in local politics. With LegislateMe, it's as easy as pushing a button!

## Technologies
  LegislateMe pairs Redux data architecture with React Native for efficient, unidirectional data management and cross-mobile performant functionality. Django, chosen for its portability and well-organized documentation, serves as the application's server-side web API.

  ![React Icon](/frontend/components/subjects/images/React-icon.png)
  ![Django Icon](/frontend/components/subjects/images/Django_logo.png)
  ![Google Maps](/frontend/components/subjects/images/Google_Maps.png)


  Third Party APIS involved:
   + [OpenStates](http://docs.openstates.org/en/latest/api/)
      - allows for curation of bill data for states.
   + [Google Maps Geocoding](https://developers.google.com/maps/documentation/javascript/geocoding)
      - allows user to enter address and receive lat/long points for user with OpenStates API  

## Features
  ### OAuth integration

  + Nobody likes having to manually sign up for an app. LegislateMe integrates with the Facebook and Google SDK in order to make authentication pain-free.
  
    **insert video of FB sign up/login here**
    **insert video of Google sign up/login here**

  ### Find your representative

  + Given geographic latitude/longitudinal coordinates, OpenStates API can return the representatives for that region. However, we recognize that most people wouldn't know what their geographic coordinates are. To solve this, LegislateMe asks users for their address (it isn't stored on the backend for privacy purposes), and routes the address through the Google Geocoding API. This returns the lat/long coordinates which can then be input into OpenStates. The representatives are then stored in our database for the current user.

  ``` python
  def google_geocode_call(address):
      r = requests.get('https://maps.googleapis.com/maps/api/geocode/json?address={address}&key={GOOGLE_API_KEY}'
      .format(address=address, GOOGLE_API_KEY=GOOGLE_API_KEY))
      pdb.set_trace()
      coordinates = r.json()['results'][0]['geometry']['bounds']['northeast']
      lat = coordinates['lat']
      lng = coordinates['lng']
      coordinatestring = "lat={lat}&long={lng}".format(lat=lat, lng=lng)
      return coordinatestring
      #"https://maps.googleapis.com/maps/api/geocode/json?address={interpolate address}key=YOUR_API_KEY".format(GOOGLE_API_KEY)

  def fetch_legislators(coordinates):
      r = requests.get("https://openstates.org/api/v1/legislators/geo/?{coordinates}&term=20172018&apikey={OPEN_STATE_KEY}"
      .format(coordinates=coordinates, OPEN_STATE_KEY=OPEN_STATE_KEY))
      legis_list = r.json()
      return list(map(lambda x: x['id'], legis_list))
      #coordinate in form of "lat=35.79&long=-78.78"
  ```

  ### Contacting representatives within the app

   + If a user is reading a bill that they feel particularly passionate about, they can call or email their representatives from within the application.

    **Show the RepresentativeView gif**  

   + If the user chooses to email, a prefilled-email with the bill details and legislator's email address are populated and ready to send.

    **Show prefilled email gif**

   + In case the user wants to give a more personal touch, the option to call is also provided. Hitting the call button will prefill the number with the representative's phone number.

   **Show video of this happening**

  ### Keeping the Database up-to-date

   + In order to serve our users the most recent bills, we have our server scan the Open States API every night at 3 am for new bills. We used the Heroku Scheduler to set up this job. Here is the code we use to scrape the OpenStates API.

  ``` python
  class Command(BaseCommand):

      def handle(self, *args, **options):
          query = 'bills/?   page=1&per_page=1000&fields=bill_id,sponsors,title,chamber,subjects,state,sources,full_name,actions&state=ca'
          bills = open_states_call(query)
          count = 0
          amount = len(bills)
          for bill in bills:
              bill_data = BillsSerializer(bill).data
              try:
                  instance = Bill.objects.get(os_id= bill_data['os_id'])
                  Bill(id=instance.id, **bill_data).save()
              except Bill.DoesNotExist:
                  Bill.objects.create(**bill_data)
              count += 1
              sleep(2)



  ```


  ### Following bills
   + It's too easy to lose track of bills that are important to you. LegislateMe allows users to bookmark bills that they'd like to follow. At any time in the future, users can check in on that bill.
    **Insert gif of saving a bill then going into bookmark view**

## Future Features
  Our team is excited to continue working on this project. Ultimately, we want LegislateMe to be the go-to place for political action at the state level. To do this, we look forward to a number of exciting engineering challenges:
  + Expand LegislateMe to incorporate data from outside of California.
  + Deploy app to Google Play and App Store.
  + Search legislator by name.
    - If users want to see a specific legislator's voting history or sponsored bills, we want to provide search functionality. This would entail having a nightly request to OpenStates and storing bills/legislators in our database for efficient retrieval by the frontend.
  + Push notifications when bookmarked bill changes state
    - If a user bookmarks a bill, we want them to be notified if its status changes (e.g it passes the House or gets signed into law). We plan to use push notifications for this feature.
