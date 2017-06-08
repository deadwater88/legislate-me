import request
OPEN_STATE = '5ab5d64b-70e3-4b48-a831-14d5347f7e83'
GOOGLE_API_KEY = 'AIzaSyBzUKnAIApQXr6XfDWMsW0WS5o_0pCmgNU'

def open_states_call(query):
    r = request.get(f"https://openstates.org/api/v1/{query}&apikey={OPEN_STATE}")
    return r.json()

def google_geocode_call(address):
    r = request.get("https://maps.googleapis.com/maps/api/geocode/json?address={address}key={GOOGLE_API_KEY}"
    return r.json()

#"https://maps.googleapis.com/maps/api/geocode/json?address={interpolate address}key=YOUR_API_KEY".format(GOOGLE_API_KEY)
