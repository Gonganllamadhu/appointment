from django.shortcuts import render
from django.urls import path
from . models import userdetails,patientinfo
from rest_framework.decorators import api_view
from .serializers import userserializer , patientserializer,AppointmentSerializer,userpatientserializer,doctorserializer
from rest_framework.authtoken.models import Token
from rest_framework.response import Response
from rest_framework.status import HTTP_201_CREATED,HTTP_400_BAD_REQUEST,HTTP_200_OK,HTTP_403_FORBIDDEN
from django.contrib.auth.models import User
import json
from django.contrib.auth import authenticate, login




@api_view(['POST'])    
def signup(request):
    user=userserializer(data=request.data)
    userdata=userpatientserializer(data=request.data)
    if user.is_valid() == True:
        udetails=User.objects.create_user(username=user.initial_data['username'],password=user.initial_data['password'])
        if userdata.is_valid() == True:
            userdata.save()
        tkn=Token.objects.create(user=udetails)
        userdetails={
            'username':udetails.username,
            'token':tkn.key,
            'phoneno':userdata.data.get('phoneno')
        }
        print(tkn)
        return Response(userdetails,status=HTTP_200_OK)
    else:
        return Response(user.errors,status=HTTP_400_BAD_REQUEST)

@api_view(['POST'])
def patientappointment(request):
    patient=patientserializer(data=request.data)
    if patient.is_valid() == True :
        patient.save()
        print(patient)
        return Response(status=HTTP_201_CREATED)
    else:
        print(patient.errors)
        return Response(patient.errors,status=HTTP_400_BAD_REQUEST)
    

@api_view(['POST'])
def fetch_appointments(request):
    #print("Hello")
    print(request.body)
    phoneno = json.loads(request.body)
    print(phoneno)
    appointments = patientinfo.objects.filter(pphone=phoneno)
    #print(appointments)
    serializer = AppointmentSerializer(appointments, many=True)
    #print('serializer')
    print(serializer)

    return Response(serializer.data, status=HTTP_200_OK)
    

@api_view(['POST'])
def delappo(request):
    data= json.loads(request.body)
    pname=data.get('pname')
    phone=data.get('phone')
    print(pname,phone)
    appointment = patientinfo.objects.filter(pphone=phone, pname=pname)
    appointment.delete()

    return Response({'message': 'Appointment deleted successfully'}, status=HTTP_200_OK)

@api_view(['POST'])
def docregister(request):
    doctor = doctorserializer(data=request.data)
    if doctor.is_valid():
            username = doctor.validated_data.get('username')
            password = doctor.validated_data.get('password')
            email = doctor.validated_data.get('email')

            if User.objects.filter(username=username).exists():
                return Response({"error": "A user with that username already exists"}, status=HTTP_400_BAD_REQUEST)
            else:
                User.objects.create_superuser(username=username, email=email, password=password)
                return Response("Superuser created successfully", status=HTTP_201_CREATED)
    else:
        return Response(doctor.errors, status=HTTP_403_FORBIDDEN)

@api_view(['POST'])
def doclogin(request):
    print(request.body)
    username = request.data.get('username')
    password = request.data.get('password')
    #print(username)
    #print(password)

    user = authenticate(username=username, password=password)
    if user is not None:
        if user.is_superuser:
            login(request, user)
            #print('1')
            return Response("Superuser logged in successfully", status=HTTP_200_OK)
        else:
            return Response("User is not a superuser", status=HTTP_400_BAD_REQUEST)
    else:
        print('2')
        return Response("Invalid credentials", status=HTTP_400_BAD_REQUEST)
    


@api_view(['POST'])
def showdocappo(request):
    body_unicode = request.body.decode('utf-8')
    print(body_unicode)
    doctors=['Dr.Narayana','Dr.Harathi','Dr.Karthik','Dr.Kalyani','Dr.Savithri','Dr.Khasim']

    if body_unicode in doctors:   
        appointments = patientinfo.objects.filter(pdoctor=body_unicode)
        serializer = AppointmentSerializer(appointments, many=True)
        return Response(serializer.data, status=HTTP_200_OK)
    else:
        appointments = patientinfo.objects.all()
        serializer = AppointmentSerializer(appointments, many=True)
        return Response(serializer.data, status=HTTP_200_OK)
