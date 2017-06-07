from django.shortcuts import render
from django.http import HttpResponse
import pdb

def index(req):
    req.session.set_test_cookie()
    if req.session.test_cookie_worked():
        print("TEST COOKIE WORKED")
    response = HttpResponse("Hello David, here is your cookie")
    return response
# Create your views here.
