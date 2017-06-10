from bills.serializers import BillsSerializer
from bills.models import Bill
import pdb

a = {
"title":"School safety: Safe Place to Learn Act.",
"scraped_subjects":[
"School safety: Safe Place to Learn Act."
],
"sponsors":[
{
"leg_id":"CAL000452",
"type":"author",
"name":"Chiu"
}
],
"actions":[
{
"date":"2017-02-17 00:00:00",
"action":"Read first time. To print.",
"type":[
"bill:reading:1"
],
"related_entities":[
],
"actor":"lower"
},
{
"date":"2017-02-19 00:00:00",
"action":"From printer. May be heard in committee March 21.",
"type":[
"other"
],
"related_entities":[
],
"actor":"lower"
},
{
"date":"2017-03-13 00:00:00",
"action":"Referred to Com. on ED.",
"type":[
"committee:referred"
],
"related_entities":[
{
"type":"committee",
"name":"Com. on ED.",
"id": None
}
],
"actor":"lower"
},
{
"date":"2017-04-05 00:00:00",
"action":"In committee: Set, first hearing. Hearing canceled at the request of author.",
"type":[
"other"
],
"related_entities":[
],
"actor":"lower"
},
{
"date":"2017-04-18 00:00:00",
"action":"From committee chair, with author's amendments: Amend, and re-refer to Com. on ED. Read second time and amended.",
"type":[
"bill:reading:1",
"committee:passed",
"bill:reading:2"
],
"related_entities":[
],
"actor":"lower"
},
{
"date":"2017-04-19 00:00:00",
"action":"Re-referred to Com. on ED.",
"type":[
"committee:referred"
],
"related_entities":[
{
"type":"committee",
"name":"Com. on ED.",
"id":None
}
],
"actor":"lower"
},
{
"date":"2017-05-02 00:00:00",
"action":"From committee: Amend, and do pass as amended and re-refer to Com. on APPR. (Ayes 6. Noes 1.) (April 26).",
"type":[
"committee:passed"
],
"related_entities":[
],
"actor":"lower"
},
{
"date":"2017-05-03 00:00:00",
"action":"Read second time and amended.",
"type":[
"bill:reading:1",
"bill:reading:2"
],
"related_entities":[
],
"actor":"lower"
},
{
"date":"2017-05-04 00:00:00",
"action":"Re-referred to Com. on APPR.",
"type":[
"committee:referred"
],
"related_entities":[
{
"type":"committee",
"name":"Com. on APPR.",
"id":None
}
],
"actor":"lower"
},
{
"date":"2017-05-17 00:00:00",
"action":"In committee: Set, first hearing. Referred to APPR. suspense file.",
"type":[
"committee:referred"
],
"related_entities":[
{
"type":"committee",
"name":"APPR. suspense file.",
"id":None
},
{
"type":"committee",
"name":"APPR",
"id":None
}
],
"actor":"lower"
},
{
"date":"2017-05-26 00:00:00",
"action":"In committee: Held under submission.",
"type":[
"other"
],
"related_entities":[
],
"actor":"lower"
}
],
"sources":[
{
"url":"http://leginfo.legislature.ca.gov/faces/billNavClient.xhtml?bill_id=201720180AB1318"
}
],
"state":"ca",
"subjects":[
],
"chamber":"lower",
"id":"CAB00022280",
"bill_id":"AB 1318"
}
b = BillsSerializer(a).data
pdb.set_trace()
