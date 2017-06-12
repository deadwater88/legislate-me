from django.core.management.base import BaseCommand
from bills.serializers import BillsSerializer, BillDetailSerializer
from legislate_me.api_keys import open_states_call
from bills.models import Bill
from time import sleep
from legislate_me.api_keys import fetch_legislator_objects
import pdb
from users.serializers import RepSerializer, RepsSerializer
from legislate_me.api_keys import google_geocode_call, fetch_legislators, fetch_legislator_objects



class Command(BaseCommand):

    def handle(self, *args, **options):
        bill = Bill.objects.get(os_id='CAB00022431')
        pdb.set_trace()
        fetch_legislator_objects([bill.leg_id])
        serializer = BillDetailSerializer(bill)
