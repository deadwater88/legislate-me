from django.shortcuts import render
from django.http import HttpResponse
from django.views import View
# from users.models import User
from django.conf import settings
from django.http import JsonResponse
from django.core.exceptions import ValidationError
import json
import pdb
from rest_framework.parsers import FormParser, JSONParser
from rest_framework.views import APIView
from users.serializers import UserSerializer
# Create your views here.
from django.contrib.auth import authenticate, login, get_user_model, logout
import requests
from legislate_me.api_keys import google_geocode_call, open_states_call

class UserView(APIView):
    parser_classes = (FormParser, JSONParser)
    # def get(self, request):
    #     users = User.objects.all()
    #     return HttpResponse(users)

    def post(self, request):
        User = get_user_model()
        email = request.data['email']
        password = request.data['password']
        last_name = request.data['lName']
        first_name = request.data['fName']
        user = User(email=email, password=password, first_name=first_name, last_name=last_name)
        try:
            user.full_clean()
        except ValidationError as e:
            return JsonResponse(e.message_dict, status=400)
        user.set_password(password)
        user.save()
        login(request, user)
        serializer = UserSerializer(user)
        del serializer.data['password']
        return JsonResponse(serializer.data)n

    def delete(self, request):
        user = request.user
        user.delete()
        logout(request)
        serializer = UserSerializer(user)
        return JsonResponse(serializer.data)

class SubjectsView(APIView):
    parser_classes = (FormParser, JSONParser)

    def patch(self, request):
        user = request.user
        subjectsDict = request.data['subjects']
        user.subjects = [subject for subject in subjectsDICT if subjectsDICT[subject]]
        user.save()
        return JsonResponse(subjectsDict)

class RepresentativeView(APIView):
    def post(self, request):
        user = request.user
        address = request.data['address']
        google_api_data = google_geocode_call(address)
        # sample API call for David
        # //https://maps.googleapis.com/maps/api/geocode/json?address=1600+Amphitheatre+Parkway,+Mountain+View,+CA&key=AIzaSyBzUKnAIApQXr6XfDWMsW0WS5o_0pCmgNU

        pos = google_api_data.geometry.location
        lat = pos.lat
        lng = pos.lng
        # openstates.org/api/v1/legislators/geo/?lat=35.79&long=-78.78
        # r = request.get(f"https://openstates.org/api/v1/{query}&apikey={OPEN_STATE}")
        query = "legislators/geo/?lat={lat}&long={lng}"
        representatives = open_states_call(query)
        for rep in representatives:
            # save rep object in our backend
            
