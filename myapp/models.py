from django.db import models

# Create your models here.

from django.db import models

class Product(models.Model):
    name = models.CharField(max_length=255)
    price = models.DecimalField(max_digits=10, decimal_places=2)
    quantity = models.IntegerField(default=0)
    description = models.TextField()
    # Add other fields as needed

class Customer(models.Model):
    name = models.CharField(max_length=255)
    email = models.EmailField()
    address = models.TextField()
    phone_number = models.CharField(max_length=20)
    # Add other fields as needed

class Order(models.Model):
    order_number = models.CharField(max_length=50, unique=True)
    date = models.DateTimeField(auto_now_add=True)
    customer = models.ForeignKey(Customer, on_delete=models.CASCADE)
    status = models.CharField(max_length=20, choices=[('pending', 'Pending'), ('processing', 'Processing'), ('shipped', 'Shipped'), ('completed', 'Completed')])
    # Add other fields as needed

class OrderItem(models.Model):
    order = models.ForeignKey(Order, on_delete=models.CASCADE)
    product = models.ForeignKey(Product, on_delete=models.CASCADE)
    quantity = models.IntegerField()
    price = models.DecimalField(max_digits=10, decimal_places=2)

class Payment(models.Model):
    order = models.OneToOneField(Order, on_delete=models.CASCADE)
    amount = models.DecimalField(max_digits=10, decimal_places=2)
    payment_method = models.CharField(max_length=50)
    status = models.CharField(max_length=20, choices=[('pending', 'Pending'), ('successful', 'Successful'), ('failed', 'Failed')])




