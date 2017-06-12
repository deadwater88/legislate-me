import requests
import pdb

OPEN_STATE_KEY = '5ab5d64b-70e3-4b48-a831-14d5347f7e83'
GOOGLE_API_KEY = 'AIzaSyBzUKnAIApQXr6XfDWMsW0WS5o_0pCmgNU'
PEXEL_KEY = '563492ad6f9170000100000155c9cc8f281148c27d9cfef9e772f862'

test_address = '1600+Amphitheatre+Parkway,+Mountain+View,+CA'

def open_states_call(query):
    r = requests.get("https://openstates.org/api/v1/{query}&apikey={OPEN_STATE_KEY}"
    .format(OPEN_STATE_KEY=OPEN_STATE_KEY, query=query))
    bills = r.json()
    return bills

def get_bill_by_subject(subject):
    querysubject = "bills/?page=20&subject={query}".format(query=subject)
    return open_states_call(querysubject)


def get_bills_by_subjects(subjects):
    bills = reduce(lambda x, y: get_bill_by_subject(x) + get_bill_by_subject(y), subjects)
    return bills

def google_geocode_call(address):
    r = requests.get('https://maps.googleapis.com/maps/api/geocode/json?address={address}&key={GOOGLE_API_KEY}'
    .format(address=address, GOOGLE_API_KEY=GOOGLE_API_KEY))
    coordinates = r.json()['results'][0]['geometry']['bounds']['northeast']
    lat = coordinates['lat']
    lng = coordinates['lng']
    coordinatestring = "lat={lat}&long={lng}".format(lat=lat, lng=lng)
    return coordinatestring
    #"https://maps.googleapis.com/maps/api/geocode/json?address={interpolate address}key=YOUR_API_KEY".format(GOOGLE_API_KEY)

def fetch_legislator_objects(legislator_ids):
    legislators = []
    for legislator_id in legislator_ids:
        query = "legislators/{legislator_id}/?".format(legislator_id=legislator_id)
        legislator = requests.get("https://openstates.org/api/v1/{query}&apikey={OPEN_STATE_KEY}".format(query=query,OPEN_STATE_KEY=OPEN_STATE_KEY))
        pdb.set_trace()
        legislators.append(legislator.json())
    return legislators

def fetch_legislators(coordinates):
    r = requests.get("https://openstates.org/api/v1/legislators/geo/?{coordinates}&term=20172018&apikey={OPEN_STATE_KEY}"
    .format(coordinates=coordinates, OPEN_STATE_KEY=OPEN_STATE_KEY))
    legis_list = r.json()
    return list(map(lambda x: x['id'], legis_list))
    #coordinate in form of "lat=35.79&long=-78.78"

def fetch_pexel_images(query):
    "holder"


# b = google_geocode_call(test_address)
# print(b)
# print(fetch_legislators(b))
#Test call

# legislators = fetch_legislator_objects(['DCL000021', 'DCL000005'])

# print legislators[0]['full_name'] # Anita Bonds
