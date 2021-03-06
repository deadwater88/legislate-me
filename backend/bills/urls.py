from django.conf.urls import url

from . import views

urlpatterns = [
    url('subjects/([A-Za-z0-9_ ]+)', views.BillsbySubjectView.as_view()),
    url(r'bookmarked', views.BookmarkedBillsView.as_view()),
    url(r'([A-Za-z0-9_-]+)', views.BillView.as_view()),
    url(r'^$', views.BillsView.as_view()),
]
