from rest_framework.serializers import ModelSerializer
from django.contrib.auth.models import User
from .models import patientinfo

class userserializer(ModelSerializer):
    class Meta:
        model=User
        fields=['username','password','email']


class patientserializer(ModelSerializer):
    class Meta:
        model= patientinfo
        fields=['pname','pgname','pphone','pemail','pdate','pdoctor']