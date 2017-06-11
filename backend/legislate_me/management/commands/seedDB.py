from django.core.management.base import BaseCommand
from bills.serializers import BillsSerializer
from legislate_me.api_keys import open_states_call
from bills.models import Bill
from time import sleep



class Command(BaseCommand):

    def handle(self, *args, **options):
        print("requesting bills...")
        query = 'bills/?page=1&per_page=1000&fields=bill_id,sponsors,title,chamber,subjects,state,sources,full_name,actions&state=ca'
        bills = open_states_call(query)
        count = 0
        amount = len(bills)
        print("{amount} Bills Fetched. Seeding...".format(amount=amount))
        for bill in bills:
            bill_data = BillsSerializer(bill).data
            try:
                instance = Bill.objects.get(os_id= bill_data['os_id'])
                Bill(id=instance.id, **bill_data).save()
            except Bill.DoesNotExist:
                Bill.objects.create(**bill_data)
            count += 1
            sleep(2)
            print(count)
        print("seeding completed")
