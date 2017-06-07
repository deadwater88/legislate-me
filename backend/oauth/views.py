from django.shortcuts import render
from django.http import HttpResponse
from django.views import View
from django.http import JsonResponse
from django.core.exceptions import ValidationError
import json
import pdb
from rest_framework.parsers import FormParser, JSONParser
from rest_framework.views import APIView
from users.serializers import UserSerializer
# Create your views here.
from django.contrib.auth import authenticate, login, get_user_model, logout



class OAuthView(APIView):
    parser_classes = (FormParser, JSONParser)
    # def get(self, request):
    #     users = User.objects.all()
    #     return HttpResponse(users)

    def post(self, request):
        User = get_user_model()
        email = request.data['email']
        user = User(email=email)
        if user:
            login(request, user)
            serializer = UserSerializer(user)
            return JsonResponse(serializer.data)

        else:
            password = request.data['password']
            last_name = request.data['last_name']
            first_name = request.data['first_name']
            user = User(email=email, password=password, first_name=first_name, last_name=last_name)
            user.save()
            user.set_password(password)
            serializer = UserSerializer(user)
            return JsonResponse(serializer.data)
