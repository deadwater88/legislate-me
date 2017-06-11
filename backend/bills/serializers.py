from bills.models import Bill
from rest_framework import serializers
from users.utils import SUBJECTS
import re
from bills.scraper import blurb_scraper


class LegislatorSerializer(serializers.BaseSerializer):

    def to_representation(self,obj):
        return "test"

class BillsSerializer(serializers.BaseSerializer):

    class Meta:
        model = Bill
        fields =('bill_id', 'img_url', 'subject', 'os_id', 'sponsor'
                'title', 'chamber', 'state', 'summary_url', 'blurb', 'first', 'last')

    def to_representation(self, obj):
        subjects = SUBJECTS
        url = obj['sources'][0]["url"]
        os_id = obj['id']
        img_id = abs(hash(os_id)) % 20
        scrape = blurb_scraper(url)
        blurb = scrape['blurb']
        subject = scrape['most_common_subject']
        first = re.search('.{10}', obj['actions'][0]['date']).group(0)
        last = re.search('.{10}', obj['actions'][-1]['date']).group(0)
        sponsor = obj['sponsors'][0]
        if sponsor['leg_id']:
            leg_id = sponsor['leg_id']
        else:
            leg_id = sponsor['committee_id']
        return {
        'os_id': os_id,
        'bill_id': obj['bill_id'],
        'leg_id': leg_id,
        'leg_name': sponsor['name'],
        'title': obj['title'],
        'chamber': obj['chamber'],
        'state': obj['state'],
        'summary_url': url,
        'img_id': img_id,
        'subject': subject,
        'blurb': blurb,
        'first': first,
        'last': last
        }



class BillDetailSerializer(serializers.BaseSerializer):

    def to_representation(self, obj):
        return {
        'os_id': obj.os_id,
        'bill_id': obj['bill_id'],
        'leg_id': leg_id,
        'leg_name': sponsor['name'],
        'title': obj['title'],
        'chamber': obj['chamber'],
        'state': obj['state'],
        'summary_url': url,
        'img_id': img_id,
        'subject': subject,
        'blurb': blurb,
        'first': first,
        'last': last
        }

class BillLiteSerializer(serializers.BaseSerializer):

    def to_representation(self, obj):
        return {
        'os_id': obj.os_id,
        'subject': obj.subject,
        'img_id': obj.img_id,
        'last_date': obj.last,
        'title': obj.title
        }
