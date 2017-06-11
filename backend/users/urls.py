from django.conf.urls import url
from users.views import UserView, SubjectsView, RepresentativesView
from rest_framework.routers import DefaultRouter

from . import views

urlpatterns = [
    url(r'^subjects$', SubjectsView.as_view()),
    url(r'^representatives', RepresentativesView.as_view()),
    url(r'^$', UserView.as_view()),
]
