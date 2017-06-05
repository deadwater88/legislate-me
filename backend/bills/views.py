from django.shortcuts import render
from django.http import HttpResponse


def index(req):
    return HttpResponse("Hello, world. You are at the bills index")
# Create your views here.
