from django.shortcuts import render
from django.http import HttpResponse

def account_settings(request):
    return render(request, 'account-settings.html')

def home(request):
    return render(request, 'home.html')    

#def home(request):
#   return render(request, 'sample.html',{'name':'Mosh'})    