from django.conf.urls import url
from users.views import UserView
from rest_framework.routers import DefaultRouter

from . import views

urlpatterns = [
    url(r'^$', UserView.as_view()),
]
