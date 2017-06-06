from django.shortcuts import render
from django.http import HttpResponse
from django.views import View
from users.models import User
from django.http import JsonResponse
from django.core.exceptions import ValidationError
import json
import pdb
from rest_framework.parsers import FormParser
from rest_framework.views import APIView
from users.serializers import UserSerializer
# Create your views here.



class UserView(APIView):
    parser_classes = (FormParser,)
    # def get(self, request):
    #     users = User.objects.all()
    #     return HttpResponse(users)

    def post(self, request):
        email = request.data['user[email]']
        password = request.data['user[password]']
        user = User(email=email, password=password)
        try:
            user.full_clean()
        except ValidationError as e:
            pdb.set_trace()
            return JsonResponse(e.message_dict, status=400)
        user.save()
        serializer = UserSerializer(user)
        return JsonResponse(serializer.data)
