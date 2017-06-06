from django.conf.urls import url
from legislate_me.views import UserViewSet
from rest_framework.routers import DefaultRouter

from . import views

# urlpatterns = [
#     url(r'^$', views.create, name='create'),
# ]

router = DefaultRouter()
router.register(r'users', UserViewSet)
urlpatterns = router.urls
