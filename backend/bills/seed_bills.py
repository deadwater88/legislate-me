from bills.serializers import BillsSerializer
from legislate_me.api_keys import open_states_call
from bills.models import Bill


query = 'bills/?page=1&per_page=1000&fields=bill_id,sponsors,title,chamber,subjects,state,sources,full_name,actions&state=ca'
bills = opens_states_call(query)

# for bill in bills:
#     bill_data = BillsSerializer(bill).data
#     Bill.objects.get_or_create(**bill_data)
    
