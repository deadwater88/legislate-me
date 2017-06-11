from django.core.management.base import BaseCommand
from bills.serializers import BillsSerializer
from legislate_me.api_keys import open_states_call
from bills.models import Bill
from time import sleep

class Command(BaseCommand):

    def handle(self, *args, **options):
        try:
            instance = Bill.objects.get(os_id='dfasdfasd')
        except Bill.DoesNotExist:
            print("exception caught")
