import request
OPEN_STATE = '5ab5d64b-70e3-4b48-a831-14d5347f7e83'

def open_states_call(query):
    r = request.get(f"https://openstates.org/api/v1/{query}&apikey={OPEN_STATE}")
    return r.json()

def google_geocodecall():
