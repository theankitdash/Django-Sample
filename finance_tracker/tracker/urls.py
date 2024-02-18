from django.urls import path
from . import views

urlpatterns = [
    path('account-settings/', views.account_settings, name='account-settings'),
    path('home/', views.home, name='home'),
]


#urlpatterns = [
#    path('sample/', views.home, name='sample'),
#]