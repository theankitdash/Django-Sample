from django.urls import path
from . import views

urlpatterns = [
    path('sample/', views.home, name='sample'),
]