from django.contrib.auth.models import User
from rest_framework import serializers
from users.utils import SUBJECTS
from legislate_me.api_keys import fetch_legislator_objects
import pdb

class UserSerializer(serializers.BaseSerializer):
    email = serializers.EmailField()
    first_name = serializers.CharField()
    last_name = serializers.CharField()
    password = serializers.CharField()

    def to_representation(self, obj):
        subjects = SUBJECTS
        for subject in obj.subjects:
            subjects[subject] = True
        representatives = RepsSerializer(obj.representatives).data
        return {
        'email': obj.email,
        'first_name': obj.first_name,
        'last_name': obj.last_name,
        'subjects': subjects,
        'representatives': representatives,
        }

class RepSerializer(serializers.BaseSerializer):

    def to_representation(self, obj):
        email = obj['email']
        legId = obj['leg_id']
        fName = obj['first_name']
        lName = obj['last_name']
        phNum = obj['offices'][0]['phone']
        siteUrl = obj['url']
        district = obj['district']
        state = obj['state']
        imgUrl = obj['photo_url']
        party = obj['party']
        return {
        'email': email,
        'legId': legId,
        'fName': fName,
        'lName': lName,
        'phNum': phNum,
        'siteUrl': siteUrl,
        'district': district,
        'state': state,
        'imgUrl': imgUrl,
        'party': party,
        }

class RepsSerializer(serializers.BaseSerializer):

    def to_representation(self, obj):
        array = fetch_legislator_objects(obj)
        array = map(lambda rep: RepSerializer(rep).data, array)
        response = {}
        for rep in array:
            response[rep['legId']] = rep
        return response
