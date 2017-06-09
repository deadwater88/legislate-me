from django.db import models
from django.contrib.auth.models import User
from django.conf import settings

# Create your models here.

class Bill(models.Model):
    billos_id = models.IntegerField(default="")
    img_url = models.CharField(default="", max_length=500)
    subject = models.CharField(default="", max_length=100)
