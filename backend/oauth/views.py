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
        userobj = {
                    'email': email,
        }
        if request.data['tokenType'] == 'facebook':
            userobj['fb_token'] = request.data['id']
        elif request.data['tokenType'] == 'google':
            userobj['google_token'] = request.data['id']
        try:
            user = User.objects.get(email=email)
            login(request, user)
            serializer = UserSerializer(user)
            return JsonResponse(serializer.data)
        except User.DoesNotExist:
            password = abs(hash(email))
            userobj['last_name'] = request.data['last_name']
            userobj['first_name'] = request.data['first_name']
            userobj['password'] = password
            user = User(**userobj)
            user.set_password(password)
            user.save()
            login(request, user)
            serializer = UserSerializer(user)
            return JsonResponse(serializer.data)
