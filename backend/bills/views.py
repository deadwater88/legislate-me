from django.shortcuts import render
from django.http import HttpResponse
import pdb
from rest_framework.parsers import FormParser, JSONParser
from rest_framework.views import APIView
import requests
# def get(req):
#     req.session.set_test_cookie()
#     if req.session.test_cookie_worked():
#         print("TEST COOKIE WORKED")
#     response = HttpResponse("Hello David, here is your cookie")
#     return response
# # Create your views here.
class Bills(APIView):
    parser_classes = (FormParser, JSONParser)

    def patch(self, request):
        user = request.user
        subjectsDict = request.data['subjects']
        user.subects = [subject for subject in subjectsDICT if subjectsDICT[subject]]
        user.save()
        return JsonResponse(subjectsDict)

    def show(self, request):
        bill_osid = req.data.bill_id
        req.url parse this
        requests.get('')
