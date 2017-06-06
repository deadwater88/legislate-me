from django.shortcuts import render
from django.http import HttpResponse
from django.views import View
from django.contrib.auth.models import User
from django.http import JsonResponse
import pdb
# Create your views here.



class UserView(View):
    def get(self, request):
        users = User.objects.all()
        return HttpResponse(users)

    def post(self, request):
        user = User(request.user)
        pdb.set_trace()
        user.save()
        return JsonResponse(user)
