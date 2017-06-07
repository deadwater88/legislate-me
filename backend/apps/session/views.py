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
from django.contrib.auth import authenticate, login, logout

# Create your views here.
class SessionView(APIView):
    parser_classes = (FormParser, JSONParser)
    def post(self, request):
        email = request.data['user[email]']
        password = request.data['user[password]']
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
