from django.shortcuts import render
from django.urls import path
from . models import userdetails
from rest_framework.decorators import api_view
from .serializers import userserializer
from rest_framework.authtoken.models import Token
from rest_framework.response import Response
from rest_framework.status import HTTP_201_CREATED,HTTP_400_BAD_REQUEST,HTTP_200_OK
from django.contrib.auth.models import User




@api_view(['POST'])    
def signup(request):
    user=userserializer(data=request.data)
    if user.is_valid() == True:
        udetails=User.objects.create_user(username=user.initial_data['username'],password=user.initial_data['password'])
        tkn=Token.objects.create(user=udetails)
        userdetails={
            'username':udetails.username,
            'token':tkn.key
        }
        print(tkn)
        return Response(userdetails,status=HTTP_200_OK)
    else:
        return Response(user.errors,status=HTTP_400_BAD_REQUEST)

@api_view(['POST'])
def patientappointment(request):
    pass