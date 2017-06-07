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



class UserView(APIView):
    parser_classes = (FormParser, JSONParser)
    # def get(self, request):
    #     users = User.objects.all()
    #     return HttpResponse(users)

    def post(self, request):
        User = get_user_model()
        pdb.set_trace();
        email = request.data['email']
        password = request.data['password']
        # last_name = request.data['last_name']
        # first_name = request.data['first_name']
        user = User(email=email, password=password, first_name="", last_name="")
        try:
            user.full_clean()
        except ValidationError as e:
            return JsonResponse(e.message_dict, status=400)
        user.set_password(password)
        user.save()
        serializer = UserSerializer(user)
        return JsonResponse(serializer.data)

    def delete(self, request):
        user = request.user
        user.delete()
        logout(request)
        serializer = UserSerializer(user)
        return JsonResponse(serializer.data)
