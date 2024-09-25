

from django.urls import path
from . import views
urlpatterns = [
    path('', views.index, name='Home'),
    path('sales/', views.sales, name='Sales'),
    path('quicksale/', views.quicksale, name='QuickSale'),
    path('about/', views.about, name='About'),
    
    
]
