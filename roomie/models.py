from django.db import models

# Create your models here.

class House(models.Model):
    flat_no = models.CharField(max_length=100)
    street = models.CharField(max_length=100)
    city = models.CharField(max_length=100)
    state = models.CharField(max_length=100)
    country = models.CharField(max_length=100)
    description = models.TextField(max_length = 400, null = True, blank=True)

class previous_stay(models.Model):
    pass

class user_details(models.Model):
    pass

class education(models.Model):
    pass

class work(models.Model):
    pass
