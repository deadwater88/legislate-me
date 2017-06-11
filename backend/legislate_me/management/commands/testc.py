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
        text = "160 Spear St. San Francisco, CA 94108"
        coord = google_geocode_call(text)
        legis = fetch_legislators(coord)
        leg_obj = fetch_legislator_objects(legis)
