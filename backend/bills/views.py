from django.shortcuts import render
from django.http import HttpResponse
from django.http import JsonResponse
import pdb
from rest_framework.parsers import FormParser, JSONParser
from rest_framework.views import APIView
import requests
from legislate_me.api_keys import open_states_call, get_bills_by_subjects
from bills.models import Bill
from bills.serializers import BillLiteSerializer, BillsSerializer, BillDetailSerializer
from bills.utils import SUBJECTS_ARRAY
from functools import reduce
import itertools
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
        bills = user.bills.all()
        response = {}
        for bill in bills:
            response[bill.os_id] = BillLiteSerializer(bill).data
        return JsonResponse(response)

    def post(self, request):
        user = request.user
        os_id = request.data['os_id']
        bill = Bill.objects.get(os_id=os_id)
        user.bills.add(bill)
        user.save()
        response = {}
        for bill in user.bills.all():
            response[bill.os_id] = BillLiteSerializer(bill).data
        return JsonResponse(response)

    def delete(self, request):
        user = request.user
        os_id = request.data['os_id']
        bill = Bill.objects.get(os_id=os_id)
        user.bills.remove(bill)
        user.save()
        response = {}
        for bill in user.bills.all():
            response[bill.os_id] = BillLiteSerializer(bill).data
        return JsonResponse(response)

# View for viewing bills by user subjects
class BillsView(APIView):
    parser_classes = (FormParser, JSONParser)

    def get(self, request):
        user = request.user
        subjects = user.subjects
        if len(subjects) == 0:
            subjects = SUBJECTS_ARRAY
            bills = [list(Bill.objects.filter(leg_id__startswith='CAL',subject=subject).order_by('-last')[:30]) for subject in subjects ]
            bills = [list(billgroup) for billgroup in itertools.zip_longest(*bills)]
            bills = reduce(lambda x, y: x + y, bills)
            bills = [bill for bill in filter(lambda x: x, bills)]
            # bills = Bill.objects.filter(leg_id__startswith='CAL').order_by('-last')[:300]
        else:
            bills = [list(Bill.objects.filter(leg_id__startswith='CAL',subject=subject).order_by('-last')[:30]) for subject in subjects ]
            bills = [list(billgroup) for billgroup in itertools.zip_longest(*bills)]
            bills = reduce(lambda x, y: x + y, bills)
            bills = [bill for bill in filter(lambda x: x, bills)]
            # bills = Bill.objects.filter(subject__in=subjects,leg_id__startswith='CAL').order_by('-last')[:300]
        response = {}
        for bill in bills:
            response[bill.os_id] = BillLiteSerializer(bill).data
        return JsonResponse(response)

class BillsbySubjectView(APIView):
    parser_classes = (FormParser, JSONParser)

    def get(self, request, subject):
        bills = Bill.objects.filter(subject=subject,leg_id__startswith='CAL')
        response = {}
        for bill in bills:
            response[bill.os_id] = BillLiteSerializer(bill).data
        return JsonResponse(response)


# view for for viewing BillDetail
class BillView(APIView):
    parser_classes = (FormParser, JSONParser)

    def get(self, request, os_id):
        #req.url parse this
        # bill = open_states_call("bills/{bill_osid}/?".format(bill_osid=bill_osid))
        bill = Bill.objects.get(os_id=os_id)
        serializer = BillDetailSerializer(bill)
        return JsonResponse(serializer.data)
