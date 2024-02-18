from django.urls import path
from . import views

urlpatterns = [
    path('account-settings/', views.account_settings, name='account-settings'),
    path('home/', views.home, name='home'),
    path('budget-expenses/', views.budget_expenses, name='budget-expenses'),
    path('report-analysis/', views.report_analysis, name='report-analysis'),
]


#urlpatterns = [
#    path('sample/', views.home, name='sample'),
#]