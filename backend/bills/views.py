from django.shortcuts import render
from django.http import HttpResponse
import pdb
from rest_framework.parsers import FormParser, JSONParser
from rest_framework.views import APIView
import requests
from legislate_me.api_keys import open_states_call, get_bills_by_subjects
from bills.models import Bill
# def get(req):
#     req.session.set_test_cookie()
#     if req.session.test_cookie_worked():
#         print("TEST COOKIE WORKED")
#     response = HttpResponse("Hello David, here is your cookie")
#     return response
# # Create your views here.
class BillsView(APIView):
    parser_classes = (FormParser, JSONParser)

    def get(self, request):
        user = request.user
        subjects = user.subjects
        bills = get_bills_by_subjects(subjects)
        record = Bill(bill_osid=bill_osid)
        if record:
            serializer = BillSerializer(bill)
            return JsonResponse(serializer.data)
        else:
            img_url = generate_img_url(bill.subject)
            Bill(img_url=img_url)

class BillView(APIView):
    parser_classes = (FormParser, JSONParser)

    def get(self, request, bill_id):
        pdb.set_trace()
        parser_classes = (FormParser, JSONParser)
        bill_osid = req.data.bill_id
        #req.url parse this
        bill = open_states_call("bills/{bill_osid}/?".format(bill_osid=bill_osid))
        record = Bill(bill_osid=bill_osid)
        if record:
            serializer = BillSerializer(bill)
            return JsonResponse(serializer.data)
        else:
            img_url = generate_img_url(bill.subject)
            Bill(img_url=img_url)
