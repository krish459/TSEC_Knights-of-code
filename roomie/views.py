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

from .models import user_details, House, WhatIAm, WhatIWant, house_gallary

from .serializers import HouseSerializer, WhatIAmSerializer, WhatIWantSerializer,HouseGallarySerializer

from accounts.serializers import UserSerializer
# Create your views here.

User = get_user_model()


# class UserDetailsView(APIView):
#     serializer_class = UserDetailsSerializer
#     permission_classes = [IsAuthenticated,]

#     def get(self, request):
#         try:
#             user=User.objects.get(email = request.user)
#             user_detail = user_details.objects.get(user = user)
#         except user_details.DoesNotExist:
#             content = {'detail': 'No such user exists'}
#             return JsonResponse(content, status = status.HTTP_404_NOT_FOUND)
#         userProfile = UserDetailsSerializer(user_detail, many=False, context={'request': request})
#         return JsonResponse(userProfile.data, status = status.HTTP_200_OK)

class AllHouseView(generics.ListAPIView):
    serializer_class = HouseSerializer
    def list(self,request):
        queryset = House.objects.all()
        serializer = HouseSerializer(queryset, many = True)
        return JsonResponse(serializer.data,safe = False, status = status.HTTP_200_OK)

class HouseImageView(APIView):
    serializer_class = HouseGallarySerializer

    def get(self, request,pk):
        try:
            home = House.objects.get(pk=pk)
        except House.DoesNotExist:
            content = {'detail': 'No such house exists'}
            return JsonResponse(content, status = status.HTTP_404_NOT_FOUND)
        
        hg = house_gallary.objects.filter(house = home)
        if hg.exists():
            houses = HouseGallarySerializer(hg, many=True, context={'request': request})
            return JsonResponse(houses.data, safe = False, status = status.HTTP_200_OK)
        else:
            content = {'detail': 'No houses'}
            return JsonResponse(content, status = status.HTTP_404_NOT_FOUND)

class HouseView(APIView):
    serializer_class = HouseSerializer
    permission_classes = [IsAuthenticated,]

    def get(self, request,pk):
        try:
            user=User.objects.get(email = request.user)
        except User.DoesNotExist:
            content = {'detail': 'No such user exists'}
            return JsonResponse(content, status = status.HTTP_404_NOT_FOUND)
        
        if pk == 0:
            houses = House.objects.filter(user_details = user)
            if houses.exists():
                houses = HouseSerializer(houses, many=True, context={'request': request})
                return JsonResponse(houses.data, safe = False, status = status.HTTP_200_OK)
            else:
                content = {'detail': 'No houses'}
                return JsonResponse(content, status = status.HTTP_404_NOT_FOUND)
        else:
            house = House.objects.all()
            houses = HouseSerializer(house, many=True, context={'request': request})
            return JsonResponse(houses.data, safe = False, status = status.HTTP_200_OK)


    def post(self, request,pk):
        try:
            user=User.objects.get(email = request.user)
        except User.DoesNotExist:
            content = {'detail': 'No such user exists'}
            return JsonResponse(content, status = status.HTTP_404_NOT_FOUND)
        house_user = House(user_details = user)
        serializer = HouseSerializer(house_user,data = request.data)
        if serializer.is_valid():
            serializer.save()
            return JsonResponse(serializer.data, status = status.HTTP_202_ACCEPTED)
        return JsonResponse(serializer.errors, status = status.HTTP_400_BAD_REQUEST)
        


class WIAView(APIView):
    serializer_class = WhatIAmSerializer

    def get(self, request):
        try:
            user=User.objects.get(email = request.data.get('email'))
        except User.DoesNotExist:
            content = {'detail': 'No such user exists'}
            return JsonResponse(content, status = status.HTTP_404_NOT_FOUND)
        try:
            wia=WhatIAm.objects.get(email = user.email)
        except WhatIAm.DoesNotExist:
            content = {'detail': 'No preference exists'}
            return JsonResponse(content, status = status.HTTP_404_NOT_FOUND)
        wias = WhatIAmSerializer(wia, many=False, context={'request': request})
        return JsonResponse(wias.data, status = status.HTTP_200_OK)


    def post(self, request):
        try:
            user=User.objects.get(email = request.data.get('email'))
        except User.DoesNotExist:
            content = {'detail': 'No such user exists'}
            return JsonResponse(content, status = status.HTTP_404_NOT_FOUND)

        serializer = WhatIAmSerializer(data = request.data)
        if serializer.is_valid():
            serializer.save()
            return JsonResponse(serializer.data, status = status.HTTP_202_ACCEPTED)
        return JsonResponse(serializer.errors, status = status.HTTP_400_BAD_REQUEST)

class AllwiaView(generics.ListAPIView):
    serializer_class = WhatIAmSerializer
    def list(self,request):
        queryset = WhatIAm.objects.all()
        serializer = WhatIAmSerializer(queryset, many = True)
        return JsonResponse(serializer.data,safe = False, status = status.HTTP_200_OK)

class WIWView(APIView):
    serializer_class = WhatIWantSerializer
    permission_classes = [IsAuthenticated,]

    def get(self, request):
        try:
            user=User.objects.get(email = request.user)
        except User.DoesNotExist:
            content = {'detail': 'No such user exists'}
            return JsonResponse(content, status = status.HTTP_404_NOT_FOUND)
        wiw=WhatIWant.objects.filter(email = user.email)
        if wiw.exists():
            wiw_first = wiw.objects.order_by('-createdAt').first() 
        wiws = WhatIAmSerializer(wiw_first, many=False, context={'request': request})
        return JsonResponse(wiws.data, status = status.HTTP_200_OK)


    def post(self, request):
        try:
            user=User.objects.get(email = request.user)
        except User.DoesNotExist:
            content = {'detail': 'No such user exists'}
            return JsonResponse(content, status = status.HTTP_404_NOT_FOUND)
        wiw_user = WhatIWant(emial = user.email)
        serializer = WhatIWantSerializer(wiw_user,data = request.data)
        if serializer.is_valid():
            serializer.save()
            return JsonResponse(serializer.data, status = status.HTTP_202_ACCEPTED)
        return JsonResponse(serializer.errors, status = status.HTTP_400_BAD_REQUEST)

