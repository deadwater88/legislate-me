from django.contrib.auth.models import User
from rest_framework import serializers
from users.utils import SUBJECTS

class UserSerializer(serializers.BaseSerializer):
    email = serializers.EmailField()
    first_name = serializers.CharField()
    last_name = serializers.CharField()


    def to_representation(self, obj):
        subjects = SUJECTS
        for subject in obj.subjects:
            subjects[subject] = False
        return {
        'email': obj.email,
        'first_name': obj.first_name,
        'last_name': obj.last_name,
        'subjects': subjects
        }
