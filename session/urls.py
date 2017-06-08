from django.conf.urls import url
from session.views import SessionView
from rest_framework.routers import DefaultRouter

from . import views

urlpatterns = [
    url(r'^$', SessionView.as_view()),

]
