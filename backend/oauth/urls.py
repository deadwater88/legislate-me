from django.conf.urls import url
from oauth.views import OAuthView
from rest_framework.routers import DefaultRouter

from . import views

urlpatterns = [
    url(r'^$', OAuthView.as_view()),
]
