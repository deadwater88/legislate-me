from django.core.management.base import BaseCommand
from bills.serializers import BillsSerializer
from legislate_me.api_keys import open_states_call
from bills.models import Bill
from time import sleep
from legislate_me.api_keys import fetch_legislator_objects
import pdb
from users.serializers import RepSerializer, RepsSerializer

class Command(BaseCommand):

    def handle(self, *args, **options):
        legislators = fetch_legislator_objects(['DCL000021', 'DCL000005'])
        pdb.set_trace()
