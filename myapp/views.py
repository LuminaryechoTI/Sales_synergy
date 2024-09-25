from django.shortcuts import render

# Create your views here.
def index(request):
    return render(request, 'index.html')

def about(request):
    return render(request, 'about.html')

def sales(request):
    return render (request, 'sales.html')

def quicksale(request): 
    return render (request, 'quicksale.html')

