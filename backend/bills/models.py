from django.db import models
from django.conf import settings
from django.contrib.postgres.fields import ArrayField

# Create your models here.

class Bill(models.Model):
    bill_id = models.IntegerField(default="")
    img_url = models.CharField(default="", max_length=500)
    subject = models.CharField(default="", max_length=100)
    os_id = models.CharField(max_length=50, primary_key=True)
    sponsor = models.CharField(max_length=100)
    title = models.CharField(max_length=5000)
    chamber = models.CharField(max_length=100)
    state = models.CharField(max_length=20)
    summary_url = models.CharField(max_length=500)
    blurb = models.CharField(max_length=100)
