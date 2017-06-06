from django.db import models
from django.contrib.auth.models import User
from django.conf import settings

# Create your models here.

class Bill(models.Model):
    billos_id = models.IntegerField(default=0)
    user = models.ForeignKey(settings.AUTH_USER_MODEL, on_delete=models.CASCADE)
    img_url = models.CharField(default="", max_length=500)
