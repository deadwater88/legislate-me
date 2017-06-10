from django.contrib.auth.models import Bill
from rest_framework import serializers
from users.utils import SUBJECTS
from bills.scraper import blurb_scraper

class LegislatorSerializer(serializers.BaseSerializer)

    def to_representation(self,obj):


class BillsSerializer(serializers.BaseSerializer):

    def to_representation(self, obj):
        subjects = SUBJECTS
        url = obj['sources'][0]["url"]
        blurb = blurb_scraper(url)
        return {
        'os_id': obj['id']
        'bill_id': obj['bill_id'],
        'sponsor': obj['sponsors'][0],
        'title': obj['title'],
        'chamber': obj['chamber'],
        'state': obj['state'],
        'summary_url': url,
        'subject': obj['subjects'][0],
        'blurb': blurb
        }

class BillDetailSerializer(serializers.BaseSerializer):

    def to_representation(self, obj):
        subjects = SUBJECTS
        for subject in obj.subjects:
            subjects[subject] = False
        return {
        'title': obj.email,
        'first_name': obj.first_name,
        'last_name': obj.last_name,
        'subjects': subjects
        }
