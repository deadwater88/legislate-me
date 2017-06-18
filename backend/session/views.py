from django.shortcuts import render
from django.http import HttpResponse
from django.views import View
from users.models import User
from django.http import JsonResponse
from django.core.exceptions import ValidationError
import json
import pdb
from rest_framework.parsers import FormParser, JSONParser
from rest_framework.views import APIView
from users.serializers import UserSerializer
# Create your views here.
from django.contrib.auth import authenticate, login, logout, get_user_model
from legislate_me.utils import id_generator

# Create your views here.
class SessionView(APIView):
    parser_classes = (FormParser, JSONParser)

    def get(self, request):
        user = request.user
        if (not user.is_anonymous):
            login(request, user)
            serializer = UserSerializer(user)
            return JsonResponse(serializer.data)
        else:
            return JsonResponse({"error": ["No user logged in"]}, status=400)


    def post(self, request):
        email = request.data['email']
        password = request.data['password']
        user = authenticate(request, email=email, password=password)
        if user is not None:
            login(request, user)
            serializer = UserSerializer(user)
            return JsonResponse(serializer.data)
            # A backend authenticated the credentials
        else:
            return JsonResponse({'credentials': ["Invalid Credentials"]}, status=402)

            # No backend authenticated the credentials
    def delete(self, request):
        user = request.user
        logout(request)
        serializer = UserSerializer(user)
        return JsonResponse(serializer.data)

        # Create guest account
    def patch(self, request):
        User = get_user_model()
        email = id_generator(30) + "@example.com"
        last_name = "Account"
        first_name = "Guest"
        representatives = ["CAL000452", "CAL000512"]
        user = User(email=email, password="password", first_name=first_name, last_name=last_name, representatives=representatives, setup=True)
        user.set_password("password")
        user.save()
        login(request, user)
        serializer = UserSerializer(user)
        return JsonResponse(serializer.data)
