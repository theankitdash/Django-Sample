from django.shortcuts import render
from django.http import HttpResponse
import requests
import json

def login(request):
    return render(request, 'login.html')

def account_settings(request):
    return render(request, 'account-settings.html')

def home(request):
    return render(request, 'home.html')   

def budget_expenses(request):
    return render(request, 'budget-expenses.html')

def report_analysis(request):
    return render(request, 'report-analysis.html')       

#def home(request):
#   return render(request, 'sample.html',{'name':'Mosh'})    