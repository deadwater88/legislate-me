# LegislateMe

## Background
LegislateMe is a mobile application that empowers users to become involved with their local politics by allowing them to contact their Congressperson about specific bills.
Background and Overview
State legislation is becoming of increasing importance to citizens across the United States, but fewer citizens than ever are interacting with their state representatives. We intend to reduce the activation energy for citizens to follow their state reps and express their opinions on specific legislation.

This problem decomposes into several steps, including:

  + Utilize [OpenStates API](http://docs.openstates.org/en/latest/api/) to grab state specific legislation
  + Allow user to easily express their opinion on specific bills by contacting their representative through our application.

## Functionality & MVP
With this application, users will be able to:
 +  View all the legislation in their state
 + Find their legislators based upon their address
 + View legislation based upon areas of interests (e.g healthcare, environmental policy, etc).
 + Send messages or make calls to their representatives

## Wireframes
![Home-Page](/docs/wireframes/Home-Page.png)

Other wireframes:
  + [All-Subjects](/docs/wireframes/All-Subjects-View.png)
  + [Bill-View](/docs/wireframes/Bill-View.png)
  + [Bookmarked-Bills](/docs/wireframes/Bookmarked-Bills.png)
  + [Customize-Interest](/docs/wireframes/Customize-Interests.png)
  + [First-Login-Select-Interest](/docs/wireframes/First-Login-Select-Interests.png)
  + [Home-Page](/docs/wireframes/Home-Page.png)
  + [Legislator-View](/docs/wireframes/Legislator-View.png)
  + [Login-Page](/docs/wireframes/Login-Page.png)
  + [Mobile-Splash-Page](/docs/wireframes/Mobile-Splash-Page.png)
  + [OAuth-Page](/docs/wireframes/OAuth-Page.png)
  + [Subject-View](/docs/wireframes/Subject-View.png)
  + [User-Profile-Page](/docs/wireframes/User-Profile-Page.png)
  + [Web-Splash-Page](/docs/wireframes/Web-Splash-Page.png)


## Technologies and Technical Challenges
This application will be built with a Django/Python backend and React Native for cross-mobile OS development.

### Finding a user’s representative
LegislateMe will route through two separate APIs to grab a user’s representative (with plans to build our own API in the near future). The user, upon sign up, will be prompted to enter his or her address. The address will be routed through the Google Maps API to grab the corresponding latitude and longitude. OpenStates API allows Geolookup by longitudinal/latitudinal coordinates to find the corresponding representative for that location.

### Contacting representative
When a user views a bill, they’ll have the option of contacting their representative based on their opinion of the bill. Through our apps, users can queue emails to be sent to their representative via our app. We’ll let the representative know that a user in their district named xxx feels a certain away about the bill. This both allows users to become more civically engaged and gives representatives better data about their constituents.

### Bills sorted by interest
Using a similar design as Medium (link here), users are given the option of expressing interest in specific policy areas. If a user is particularly interested in immigration law, LegislateMe will display immigration policy proposals on their home page.

### Cross mobile-OS development
By the end of our dev process, we intend to have an application deployable on both iOS and Android. Our development will begin for the Android OS, but we plan to port this over to iOS later in the week.

### Plan for getting users and reviews
Each member of the team plans to reach out to two groups of friends: those who are already naturally civically inclined and those who aren’t. We’re going to ask the former group how it would help their outreach efforts, and ask the latter group if it would help them get more involved with local policy.

We also plan to watch user’s interact with our application and observe any pain points.

### Things Accomplished Over the Weekend
  
  + Android studio installed and setup to work with React-Native. (All members)
  + Wireframes drawn for all pages. (Christine and Leland)
  + Django installation and psql setup (David and Sunny)
  + Determined routes/component hiearchy (Sunny, Leland, Christine)
  + Test API calls to Open State (David).
### Group Members & Work Breakdown

Our group consists of four members, Leland Krych, David Wong, Christine Garibian, and Rohit (Sunny) Rekhi.

David's primary responsibilities will be:

- Researching and implementing Django backend (routes, views, models and database)
- Testing third party api calls. (google maps, open state, pexel)

Sunny's primary responsiblities

- Oauth and Frontend/Backend implementation.
- Producing the new HTML file with new colors

Leland Krysch's primary responsibilities

- Frontend Implementation
- User Interface and User Experience design and splash


Christine 
- Frontend Implementation
- User Interface and User Experience design and splash

### Implementation Timeline

**Day 1**: Auth frontend and backend. By the end of the day, we will have:

- David: DB setup, schema, AJAX
- Leland: Frontend, Sign in + Select Interests
- Christine: Frontend , Sign in + Select Interests
- Sunny: DB setup, schema, oAuth

**Day 2**: User controller and model and profile and settings and finding legislators

- David: Backend User routes/views/responses + find your legislator
- Leland: Frontend, settings page + find your legislator
- Christine: Backend User routes/views/responses + find your legislator
- Sunny: Frontend, user profile page + find your legislator


**Day 3**: Bills/index/item and Logo and Header

- David: Backend Bills routes/views/responses
- Leland: Frontend, Header and Logo + Bookmarked Bills
- Christine: Frontend , Navbar and Logo + Bookmarked Bills 
- Sunny: Frontend Bill index, Bill index item 


**Day 4**: Bookmarked bills and finish backend and bills by subject

- David: Finish backend + Help Frontend
- Leland: Frontend Bill view, Bookmarked Bills
- Christine:Frontend Legislator view, Bookmarked Bills
- Sunny: Bills by subject


**Day 5**: Call and Email feature and Frontend Splash
- David: Call + Email feature
- Leland: FrontEnd Splash
- Christine: FrontEnd Splash
- Sunny: Call + Email feature
