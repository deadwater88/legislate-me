from django.shortcuts import render
from django.http import HttpResponse
import pdb
from rest_framework.parsers import FormParser, JSONParser
from rest_framework.views import APIView
import requests
from legislate_me.api_keys import open_states_call
from bills.model import Bill
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
        bill = open_states_call(f"bills/{bill_osid}/?")
        record = Bill(bill_osid=bill_osid)

        if record:
            serializer = BillSerializer(bill)
            return JsonResponse(serializer.data)
        else:

            generate_img_url(bill.subject)
            Bill(img_url=img_url)
