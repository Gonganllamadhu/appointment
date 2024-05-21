from rest_framework.serializers import ModelSerializer
from django.contrib.auth.models import User
from .models import patientinfo,userdetails,doctoruserdetails

class userserializer(ModelSerializer):
    class Meta:
        model=User
        fields=['username','password','email']

class doctorserializer(ModelSerializer):
    class Meta:
        model = doctoruserdetails
        fields= ['username','password','email'] 

class userpatientserializer(ModelSerializer):
    class Meta:
        model=userdetails
        fields=['username','password','email','phoneno']

class patientserializer(ModelSerializer):
    class Meta:
        model= patientinfo
        fields=['pname','pgname','pphone','pemail','pdate','pdoctor']


class AppointmentSerializer(ModelSerializer):
    class Meta:
        model = patientinfo
        fields=['pname','pgname','pphone','pemail','pdate','pdoctor']
