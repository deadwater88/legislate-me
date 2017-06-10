from django.shortcuts import render
from django.http import HttpResponse
import pdb
from rest_framework.parsers import FormParser, JSONParser
from rest_framework.views import APIView
import requests
from legislate_me.api_keys import open_states_call, get_bills_by_subjects
from bills.models import Bill
from bills.serializers import BillLiteSerializer, BillsSerializer
# def get(req):
#     req.session.set_test_cookie()
#     if req.session.test_cookie_worked():
#         print("TEST COOKIE WORKED")
#     response = HttpResponse("Hello David, here is your cookie")
#     return response
# # Create your views here.

class BookmarkedBillsView(APIView):
    parser_classes = (FormParser, JSONParser)

    def get(self, request):
        user = request.user
        bills = user.bills
        serializer = BillsLiteSerializer(bills)
        return JsonResponse(serializer.data)


class BillsView(APIView):
    parser_classes = (FormParser, JSONParser)

    def get(self, request):
        user = request.user
        subjects = user.subjects
        bills = Bill.objects.filter(subject__in=subjects)
        response = {}
        for bill in bills:
            response[bill['os_id']] = BillLiteSerializer(bill).data
        return JsonResponse(response)


class BillView(APIView):
    parser_classes = (FormParser, JSONParser)

    def get(self, request, os_id):
        parser_classes = (FormParser, JSONParser)
        #req.url parse this
        # bill = open_states_call("bills/{bill_osid}/?".format(bill_osid=bill_osid))
        bill = Bill.get(os_id=os_id)
        serializer = BillDetailSerializer(bill)
        return JsonResponse(serializer.data)
