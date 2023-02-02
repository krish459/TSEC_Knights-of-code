from django.db import models
from accounts.models import User
# Create your models here.

class WhatIAm(models.Model):
    email = models.EmailField(max_length=255, unique=True)
    food = models.IntegerField()
    smoker = models.IntegerField()
    drinker = models.IntegerField()
    pet = models.IntegerField()
    gender = models.IntegerField()
    cook = models.IntegerField()
    job = models.IntegerField()

    def __str__(self):
        return self.email

class WhatIWant(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE, null=True, blank=True)
    food = models.IntegerField()
    smoker = models.IntegerField()
    drinker = models.IntegerField()
    pet = models.IntegerField()
    gender = models.IntegerField()
    cook = models.IntegerField()
    job = models.IntegerField()



class House(models.Model):
    user_details = models.ForeignKey(User, on_delete=models.CASCADE, null=True, blank=True)
    address = models.TextField(max_length=600)
    city = models.CharField(max_length=100)
    state = models.CharField(max_length=100)
    country = models.CharField(max_length=100)
    description = models.TextField(max_length = 400)
    bhk = models.CharField(max_length=30, null=True, blank=True)
    area = models.CharField(max_length=30, null=True, blank=True)
    rent = models.IntegerField()
    flr_no = models.IntegerField(null=True, blank=True)
    property_age = models.CharField(max_length=100, null=True, blank=True)

    def __str__(self):
        return str(self.id)+self.city


def upload_path_handler(instance, filename):
    return "images/gallary/{label}/{file}".format(
        label=instance.house.id, file=filename
    )


class house_gallary(models.Model):
    house = models.ForeignKey(House, on_delete=models.CASCADE)
    image = models.ImageField(upload_to=upload_path_handler)

    def __str__(self):
        return 'image'+ str(self.house.id)


class previous_stay(models.Model):
    house = models.ForeignKey(House, on_delete=models.CASCADE)
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    comment = models.TextField(max_length=900)

    def __str__(self):
        return str(self.house.id) +'-' + str(self.user.id)




class education(models.Model):
    degree = models.CharField(max_length=200)
    institution = models.CharField(max_length=200)
    part_time = models.BooleanField(default=False)

    def __str__(self):
        return str(self.id) + self.degree


class work(models.Model):
    company = models.CharField(max_length=200)
    title = models.CharField(max_length=200)
    currently_workng = models.BooleanField(default=False)

    def __str__(self):
        return str(self.id) + self.company


class user_details(models.Model):
    user = models.OneToOneField(User, on_delete=models.CASCADE)
    user_education = models.ForeignKey(education, on_delete=models.CASCADE)
    user_work = models.ForeignKey(work, on_delete=models.CASCADE)
    hobbies = models.TextField(max_length=900)
    food_pref = models.CharField(max_length=100)
    odd_habits = models.CharField(max_length=400)

    def __str__(self):
        return str(self.user.id)
        
# class user_education(models.Model):
#     user = models.OneToOneField(user_details, on_delete=models.CASCADE)
#     education = models.ForeignKey(education, on_delete=models.CASCADE)
    
#     def __str__(self):
#         return str(self.user.id) + self.education.degree


# class user_work(models.Model):
#     user = models.OneToOneField(user_details, on_delete=models.CASCADE)
#     work = models.ForeignKey(work, on_delete=models.CASCADE)

#     def __str__(self):
#         return str(self.user.id) + self.work.company


