from django.contrib.auth.models import Bill
from rest_framework import serializers
from users.utils import SUBJECTS

class BillsSerializer(serializers.BaseSerializer):

    def to_representation(self, obj):
        subjects = SUBJECTS
        for subject in obj.subjects:
            subjects[subject] = False
        return {
        'email': obj.email,
        'first_name': obj.first_name,
        'last_name': obj.last_name,
        'subjects': subjects
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
