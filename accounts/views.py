from django.urls import reverse
from django.conf import settings
from django.contrib.auth import get_user_model
from rest_framework import (mixins, generics, status, permissions)
from rest_framework.permissions import IsAuthenticated
from rest_framework_simplejwt.tokens import RefreshToken
from django.http.response import HttpResponse, JsonResponse
import jwt
from rest_framework.views import APIView
from drf_spectacular.utils import extend_schema, OpenApiParameter
from drf_spectacular.types import OpenApiTypes
from rest_framework import (mixins, generics, status, permissions)
from rest_framework.response import Response

#reseting password
from django.contrib.auth.tokens import PasswordResetTokenGenerator
from django.utils.encoding import smart_str, force_str, smart_bytes, DjangoUnicodeDecodeError
from django.utils.http import urlsafe_base64_decode, urlsafe_base64_encode
from django.contrib.sites.shortcuts import get_current_site
from decouple import config
from django.shortcuts import redirect, render
import os

#phone verification
from . import verifyPhone
from drf_yasg import openapi
from drf_yasg.utils import swagger_auto_schema

# Create your views here.

from .utils import Util
from .serializers import (UserSerializer, EmailVerificationSerializer, LoginSerializer, 
                          ResetPasswordEmailRequestSerializer, SetNewPasswordSerializer, 
                          LogoutSerializer,
                          GoogleSocialAuthSerializer,
                          PhoneVerificationSerializer,
                          TwoStepVerificationSerializer,
                          SendTwoStepVerificationSerializer
                          )

User = get_user_model()

class SignUp(mixins.ListModelMixin, mixins.CreateModelMixin, generics.GenericAPIView):
    
    serializer_class = UserSerializer

    def post(self, request, *args, **kwargs):
        serializer1 = UserSerializer(data=request.data)
        if serializer1.is_valid():
            user_data = serializer1.save_user(serializer1.data)
            token = RefreshToken.for_user(user_data).access_token
            relative_link = reverse('EmailVerification')
            current_site = get_current_site(request).domain
            abs_url = current_site + relative_link + "?token=" + str(token)
            email_body = "Hiii" + "! Use link below to verify your email \n"+ abs_url
            data ={'email_body': email_body, 'email_subject': "Verify your Email",'to_email':user_data.email}
            Util.send_email(data)
            
            user_data
            # verifyPhone.send(user_data.phone)

            return JsonResponse({'status': 'created', 'token': str(token), 'phone':str(user_data.phone)}, status=status.HTTP_201_CREATED)
        return JsonResponse(serializer1.errors, status=status.HTTP_400_BAD_REQUEST)


class VerifyEmail(APIView):

    serializer_class = EmailVerificationSerializer

    token_param_config = OpenApiParameter('token', OpenApiTypes.STR, OpenApiParameter.QUERY, description="Enter token here")

    @extend_schema(parameters=[token_param_config],)
    def get(self, request, *args, **kwargs):
        token = request.GET.get('token')

        try:
            payload = jwt.decode(token,settings.SECRET_KEY, algorithms=['HS256'])
            user = User.objects.get(id=payload['user_id'])
            if not user.is_active:
                user.is_active = True
                user.save()
            return JsonResponse({'status': 'Email Successfully Verified'}, status=status.HTTP_200_OK)
        except jwt.ExpiredSignatureError as identifier:
            return JsonResponse({'error':"Activation Link has expired"}, status=status.HTTP_400_BAD_REQUEST)
        except jwt.exceptions.DecodeError as identifier:
            return JsonResponse({'error':"Invalid Token"}, status=status.HTTP_400_BAD_REQUEST)


class Login(generics.GenericAPIView):

    serializer_class = LoginSerializer

    def post(self, request, *args, **kwargs):
        serializer = self.serializer_class(data=request.data, context={'request':request})
        serializer.is_valid(raise_exception=True)
        return JsonResponse(serializer.validated_data, status=status.HTTP_200_OK)

        
class RequestPasswordResetEmail(generics.GenericAPIView):
    serializer_class = ResetPasswordEmailRequestSerializer

    def post(self, request):
        serializer = self.serializer_class(data=request.data)

        email = request.data.get('email', '')

        if User.objects.filter(email=email).exists():
            user=User.objects.get(email=email)
            uidb64=urlsafe_base64_encode(smart_bytes(user.id))
            #hashing the user id 
            token=PasswordResetTokenGenerator().make_token(user) 
            #this token becomes invalid once the user has reset the password
            current_site = get_current_site(request).domain
            relative_link = reverse('password-reset-confirm',kwargs={'uidb64':uidb64,'token':token})
            abs_url = current_site + relative_link
            email_body = "Hiii! Use link below to reset your password \n"+ abs_url
            data ={'email_body': email_body, 'email_subject': "reset your password",'to_email':user.email}
            Util.send_email(data)
            return Response({'success': 'We have sent you a link to your email to reset your password'}, status=status.HTTP_200_OK)
        return Response({'Error': 'No such email id exists'}, status=status.HTTP_200_OK)



class PasswordTokenCheckAPI(generics.GenericAPIView):

    def get(self,request,uidb64,token):
        try:
            try:
                id = smart_str(urlsafe_base64_decode(uidb64))
                user = User.objects.get(id=id)
            except:
                return JsonResponse({'error':'incorrect uidb64'})
            if not PasswordResetTokenGenerator().check_token(user, token):
                return JsonResponse({'error':'Token is not valid, please request a new one'}, status = status.HTTP_401_UNAUTHORIZED)
            return JsonResponse({'success':True,'message':'Credentials Valid','uidb64':uidb64,'token':token}, status = status.HTTP_200_OK)
        except DjangoUnicodeDecodeError as identifier:
            if not PasswordResetTokenGenerator().check_token(user):
                return JsonResponse({'error': 'Token is not valid, please request a new one'}, status=status.HTTP_400_BAD_REQUEST)


class SetNewPasswordAPIView(generics.GenericAPIView):
    serializer_class = SetNewPasswordSerializer
    
    def patch(self, request):
        serializer = self.serializer_class(data=request.data)
        serializer.is_valid(raise_exception=True)
        return JsonResponse({'success': True, 'message': 'Password reset success'}, status=status.HTTP_200_OK)



class LogoutAPIView(generics.GenericAPIView):
    serializer_class = LogoutSerializer
    permission_classes = (permissions.IsAuthenticated,)

    def post(self, request):
        serializer = self.serializer_class(data=request.data)
        serializer.is_valid(raise_exception=True)
        serializer.save()

        return Response({'message':'Logged out successfully'},status=status.HTTP_204_NO_CONTENT)



##############SOCIAL AUTH#######################

class GoogleAuth(generics.GenericAPIView):

    serializer_class = GoogleSocialAuthSerializer

    def post(self, request):
        serializer = self.serializer_class(data=request.data)
        serializer.is_valid(raise_exception=True)
        data = ((serializer.validated_data)['auth_token'])
        return Response(data, status=status.HTTP_200_OK)

def index(request):
    google_client_id = config('GOOGLE_CLIENT_ID')
    content = {'GOOGLE_CLIENT_ID': google_client_id}
    return render(request, 'index.html', content)


class UserView(APIView):
    serializer_class = UserSerializer
    permission_classes = [IsAuthenticated,]

    def get(self,request):
        try:
            user=User.objects.get(email = request.user)
        except User.DoesNotExist:
            content = {'detail': 'No such user exists'}
            return JsonResponse(content, status = status.HTTP_404_NOT_FOUND)
        userProfile = UserSerializer(user, many=False, context={'request': request})
        return JsonResponse(userProfile.data,safe=False,status = status.HTTP_200_OK)


    def patch(self,request):
        try:
            user=User.objects.get(email = request.user)
        except User.DoesNotExist:
            content = {'detail': 'No such user exists'}
            return JsonResponse(content, status = status.HTTP_404_NOT_FOUND)
        email = user.email
        serializer = UserSerializer(instance = user, data=request.data, partial = True)
        if serializer.is_valid(): 
            if(serializer.validated_data.get('email',user.email) != email):
                serializer.validated_data['email'] = email
            serializer.save()
            return JsonResponse(serializer.data,safe=False,status = status.HTTP_200_OK)
        return JsonResponse(serializer.errors, status = status.HTTP_400_BAD_REQUEST)


    def delete(self,request):
        try:
            user = User.objects.get(email = request.user)
        except User.DoesNotExist:
            content = {'detail': 'No such user exists'}
            return JsonResponse(content, status = status.HTTP_404_NOT_FOUND)
        user.delete()
        content = {'detail': 'User Deleted'}
        return JsonResponse(content, status = status.HTTP_202_ACCEPTED)



class LogoutAPIView(generics.GenericAPIView):
    serializer_class = LogoutSerializer
    permission_classes = (permissions.IsAuthenticated,)

    def post(self, request, *args, **kwargs):
        
        serializer = self.serializer_class(data=request.data)
        serializer.is_valid(raise_exception=True)
        serializer.save()

        return Response({'message':'Logged out successfully'},status=status.HTTP_204_NO_CONTENT)




# @permission_classes((EmailVerifiedPermission,))
class VerifyPhone(generics.GenericAPIView):
    serializer_class = PhoneVerificationSerializer
    
    def post(self, request):
        serializer = self.serializer_class(data=request.data)
        if serializer.is_valid(raise_exception=True):
            if User.objects.filter(phone=serializer.data['phone']).exists():
                user = User.objects.get(phone=serializer.data['phone'])
                # phone = request.data.get('phone', '')
                code = serializer.data['code']
                if verifyPhone.check(serializer.data['phone'], code):
                    user.verifiedPhone = True
                    user.active = True
                    user.save()
                    return JsonResponse({'status': 'Phone Successfully Verified'}, status=status.HTTP_200_OK)
        return JsonResponse({'error':"Code Expired"}, status=status.HTTP_400_BAD_REQUEST)


class sendTwoStep(APIView):
    serializer_class = SendTwoStepVerificationSerializer

    token_param_config = openapi.Parameter('token',in_=openapi.IN_QUERY, type=openapi.TYPE_STRING, description="Enter token here")

    @swagger_auto_schema(manual_parameters=[token_param_config])
    def get(self, request, *args, **kwargs):
        token = request.GET.get('token')

        try:
            payload = jwt.decode(token,settings.SECRET_KEY, algorithms=['HS256'])
            user = User.objects.get(id=payload['user_id'])
            verifyPhone.send(user.phone)
            current_site = get_current_site(request).domain
            relative_link = reverse('TwoStep')
            abs_url = current_site + relative_link 
            return JsonResponse({'status': 'Two step code sent to registered phone number', 'To enter code': abs_url}, status=status.HTTP_200_OK)
        except jwt.ExpiredSignatureError as identifier:
            return JsonResponse({'error':"Activation Link has expired"}, status=status.HTTP_400_BAD_REQUEST)
        except jwt.exceptions.DecodeError as identifier:
            return JsonResponse({'error':"Invalid Token"}, status=status.HTTP_400_BAD_REQUEST)


class TwoStep(APIView):
    serializer_class = TwoStepVerificationSerializer

    token_param_config = openapi.Parameter('token',in_=openapi.IN_QUERY, type=openapi.TYPE_STRING, description="Enter token here")
    code_param_config = openapi.Parameter('code',in_=openapi.IN_QUERY, type=openapi.TYPE_STRING, description="Enter code here")

    @swagger_auto_schema(manual_parameters=[token_param_config, code_param_config])
    def get(self, request, *args, **kwargs):
        token = request.GET.get('token')
        code = request.GET.get('code')
        try:
            payload = jwt.decode(token,settings.SECRET_KEY, algorithms=['HS256'])
            user = User.objects.get(id=payload['user_id'])
            if verifyPhone.check(user.phone, code):
                user.login2stepverify = True
                user.save()
                return JsonResponse({'status': '2 step verification Successful'}, status=status.HTTP_200_OK)
        except jwt.ExpiredSignatureError as identifier:
            return JsonResponse({'error':"Activation Link has expired"}, status=status.HTTP_400_BAD_REQUEST)
        except jwt.exceptions.DecodeError as identifier:
            return JsonResponse({'error':"Invalid Token"}, status=status.HTTP_400_BAD_REQUEST)
 
class check_twilio(APIView):
    serializer_class = UserSerializer
    permission_classes = [IsAuthenticated,]

    def get(self,request):
        try:
            user=User.objects.get(email = request.user)
        except User.DoesNotExist:
            content = {'detail': 'No such user exists'}
            return JsonResponse(content, status = status.HTTP_404_NOT_FOUND)
        
        try:
            verifyPhone.send(user.phone)
        except:
            return JsonResponse({'error':"Activation Link has expired"}, status=status.HTTP_404_NOT_FOUND)
        