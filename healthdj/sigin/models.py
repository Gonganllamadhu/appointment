from django.db import models

# Create your models here.

class userdetails(models.Model):
    username=models.CharField(max_length=30)
    password=models.CharField(max_length=30)
    email=models.CharField(max_length=50)
    
    def __str__(self):
        return self.username
    def __str__(self):
        return self.email

class patientinfo(models.Model):
    pname=models.CharField(max_length=30)
    pgname=models.CharField(max_length=30)
    pphone=models.IntegerField()
    pemail=models.CharField(max_length=30)
    pdate=models.DateTimeField()
    pdoctor=models.CharField(max_length=30)

    def __str__(self):
        return self.pname
    def __str__(self):
        return self.pgname  
    def __str__(self):
        return self.pemail  
    def __str__(self):
        return self.pdoctor        
