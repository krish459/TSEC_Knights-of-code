from django.db import models

from django.contrib.auth.models import (AbstractBaseUser, BaseUserManager)
from rest_framework_simplejwt.tokens import RefreshToken



class UserManager(BaseUserManager):

    def create_superuser(self, email,phone,gender,DOB, firstname, lastname, password=None, is_admin=True, is_staff=True, is_verifiedPhone=True):
        if not email:
            raise ValueError('Users must have an email address')

        if not phone:
            raise ValueError("User must have a phone number")
        if not password:
            raise ValueError("User must have an password")
        
        user = self.model(
            email=self.normalize_email(email),
        )

        user.set_password(password)
        user.phone = phone
        user.gender = gender
        user.DOB = DOB
        user.firstname = firstname
        user.lastname = lastname
        user.admin = is_admin
        user.staff = is_staff
        user.is_active = True
        user.verifiedPhone = is_verifiedPhone
        # user.nottwostep=is_nottwostep
        user.save(using=self._db)
        return user
        
    def create_staffuser(self, email, firstname, lastname, password,phone,DOB,gender):
        user = self.create_superuser(
            email,
            phone,
            gender,
            DOB,
            firstname,
            lastname,
            password=password
        )
        user.admin = False
        user.save(using=self._db)
        return user

    def create_user(self, email, firstname, lastname, password,phone,DOB, image, aadhar_image,gender):
        user = self.create_superuser(
            email,
            phone,
            gender,
            DOB,
            firstname,
            lastname,
            password=password,
            is_verifiedPhone=False,
            # is_nottwostep= not nottwostep
        )
        user.staff = False
        user.admin = False
        user.is_active = False
        user.image = image
        user.aadhar_image = aadhar_image
        user.save(using=self._db)
        return user

AUTH_PROVIDERS = {'google':'google', 'email':'email'}


def upload_path_handler(instance, filename):
    return "images/profile/{label}/{file}".format(
        label=instance.firstname + '_' + instance.lastname, file=filename
    )

def aadhar_upload_path_handler(instance, filename):
    return "images/aadhar/{label}/{file}".format(
        label=instance.firstname + '_' + instance.lastname, file=filename
    )

class User(AbstractBaseUser):
    email = models.EmailField(
        verbose_name='email address',
        max_length=255,
        unique=True,
    )
    firstname         = models.CharField(max_length=60)
    lastname          = models.CharField(max_length=60)
    email             = models.EmailField(max_length=255, unique=True)
    phone             = models.CharField(max_length=15, unique=True)
    image             = models.ImageField(upload_to = upload_path_handler,null = True, blank = True)
    aadhar_image      = models.ImageField(upload_to = aadhar_upload_path_handler,null = True, blank = True)
    gender            = models.CharField(max_length = 100)
    DOB               = models.DateField()
    is_active         = models.BooleanField(default=False)
    staff             = models.BooleanField(default=False)
    admin             = models.BooleanField(default=False)
    verifiedPhone     = models.BooleanField(default=False)
    # nottwostep        = models.BooleanField(default=True)
    # login2stepverify  = models.BooleanField(default=True)
    auth_provider     = models.CharField(max_length = 255, blank = False, null = False, default=AUTH_PROVIDERS.get('email'))
    

    USERNAME_FIELD = 'email'

    REQUIRED_FIELDS = ['firstname', 'lastname','phone','gender','DOB']

    objects = UserManager()

    def __str__(self):
        return self.email

    def has_perm(self, perm, obj=None):
        return True

    def has_module_perms(self, app_label):
        return True

    @property
    def is_staff(self):
        return self.staff

    @property
    def is_admin(self):
        return self.admin

    @property
    def is_verifiedPhone(self):
        return self.verifiedPhone

    # @property
    # def is_nottwostep(self):
    #     return self.nottwostep


    def tokens(self):
        refresh = RefreshToken.for_user(self)
        return {
            'refresh': str(refresh),
            'access': str(refresh.access_token)
        }

