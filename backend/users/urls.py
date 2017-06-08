from django.conf.urls import url
from users.views import UserView, SubjectsView
from rest_framework.routers import DefaultRouter

from . import views

urlpatterns = [
    url(r'^/subjects$', SubectsView.as_view()),
    url(r'^$', UserView.as_view()),
]
