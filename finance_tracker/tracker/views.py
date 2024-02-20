from django.shortcuts import render
from django.http import HttpResponse
from .express_requests import get_login_info_from_express

def account_settings(request):
    login_info = get_login_info_from_express()
    if login_info:
        # Pass the login information to the template for rendering
        return render(request, 'account-settings.html', {'login_info': login_info})
    else:
        # Handle error
        return render(request, 'error.html', {'message': 'Failed to retrieve login information from Express.js'})    

def home(request):
    return render(request, 'home.html')   

def budget_expenses(request):
    return render(request, 'budget-expenses.html')

def report_analysis(request):
    return render(request, 'report-analysis.html')       

#def home(request):
#   return render(request, 'sample.html',{'name':'Mosh'})    