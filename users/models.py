from django.conf import settings
from django.db import models

from django.contrib.sessions.models import Session


class UserSession(models.Model):
    user = models.ForeignKey(settings.AUTH_USER_MODEL)
    session = models.ForeignKey(Session)  
