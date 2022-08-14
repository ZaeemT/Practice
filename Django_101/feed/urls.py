from email import feedparser
from django.urls import path
from .views import HomePageView

app_name = 'feed'

urlpatterns = [
    path('', HomePageView.as_view(), name='index')
]
