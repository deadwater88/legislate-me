from django.core.management.base import BaseCommand
from bills.serializers import BillsSerializer
from legislate_me.api_keys import open_states_call
from bills.models import Bill
from time import sleep
from django.conf.urls import url
from users.views import UserView
from rest_framework.routers import DefaultRouter




class Command(BaseCommand):

    def handle(self, *args, **options):
        try:
             Bill.objects.get('dfasdfasdf')
        except Bill.DoesNotExist:
            Bill.objects.create(**bill_data)
