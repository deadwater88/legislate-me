from django.db import models
from django.conf import settings
from django.contrib.postgres.fields import ArrayField

# Create your models here.

class Bill(models.Model):
    subject = models.CharField(default="", max_length=100, blank=True)
    os_id = models.CharField(max_length=50, db_index=True, db_column="os_id", unique=True, )
    sponsor = models.CharField(max_length=100)
    title = models.CharField(max_length=5000)
    chamber = models.CharField(max_length=100)
    state = models.CharField(max_length=20)
    summary_url = models.CharField(max_length=500)
    blurb = models.CharField(max_length=100)
    first = models.DateField(default="", blank=True)
    last = models.DateField(default="", blank=True)
    bill_id = models.CharField(default="", max_length=100, db_column="bill_id")
    img_id = models.IntegerField(default=0)
    check = models.CharField(default="", blank=True, max_length=50)
    leg_name = models.CharField(default= "",max_length=100)
    leg_id = models.CharField(default= "", max_length= 100)
