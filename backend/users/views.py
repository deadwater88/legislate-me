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
from users.serializers import UserSerializer, RepsSerializer
# Create your views here.
from django.contrib.auth import authenticate, login, get_user_model, logout
import requests
from legislate_me.api_keys import google_geocode_call, open_states_call, fetch_legislators, fetch_legislator_objects





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
        return JsonResponse(serializer.data)

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
        subjectsDict = request.data
        user.subjects = [subject for subject in subjectsDict if subjectsDict[subject]]
        user.save()
        return JsonResponse(subjectsDict)

class RepresentativesView(APIView):
    parser_classes = (FormParser, JSONParser)
    def post(self, request):
        user = request.user
        address = request.data['address']
        geocode = google_geocode_call(address)
        reps = fetch_legislators(geocode)
        user.representatives = reps
        user.save()
        serializer = RepsSerializer(reps)
        return JsonResponse(serializer.data)
            # save rep object in our backend
def setup(request):
    parser_classes = (FormParser, JSONParser)
    user = request.user
    user.setup = True
    serializer = UserSerializer(user)
    return JsonResponse(serializer.data)
