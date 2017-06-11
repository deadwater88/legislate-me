from django.core.management.base import BaseCommand
from bills.serializers import BillsSerializer, BillDetailSerializer
from legislate_me.api_keys import open_states_call
from bills.models import Bill
from time import sleep
from legislate_me.api_keys import fetch_legislator_objects
import pdb
from users.serializers import RepSerializer, RepsSerializer



class Command(BaseCommand):

    def handle(self, *args, **options):
        bill = Bill.objects.all()[0]
        serializer = BillDetailSerializer(bill)
        pdb.set_trace()
