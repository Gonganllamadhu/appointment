from django.db import models
from django.db.models.signals import pre_save,post_save
from django.core.mail import send_mail
from django.conf import settings

# Create your models here.

class userdetails(models.Model):
    username = models.CharField(max_length=30)
    password = models.CharField(max_length=30)
    email = models.CharField(max_length=50)
    phoneno=models.CharField(max_length=20)
    
    def __str__(self):
        return self.username

class doctoruserdetails(models.Model):
    username=models.CharField(max_length=30)
    password=models.CharField(max_length=30)
    email= models.CharField(max_length=50)

    def __str__(self):
        return self.username    

class patientinfo(models.Model):
    pname = models.CharField(max_length=30)
    pgname = models.CharField(max_length=30)
    pphone = models.CharField(max_length=15)
    pemail = models.CharField(max_length=50)
    pdate = models.DateField()
    pdoctor = models.CharField(max_length=30)

    def __str__(self):
        return self.pname

def patientemail(sender, instance, *args, **kwargs):
    subject = 'Appointment confirmation from Star Hospitals'
    message = '''
        Hi {} Greetings from Star Hospitals,
        you successfully Booked an appointment with {} on {} in our Hospitals 
        make sure to attend the appointment on time 
        Thanks from Star Hospital
        '''.format(instance.pname, instance.pdoctor, instance.pdate)
    send_mail(subject=subject, from_email=settings.EMAIL_HOST_USER, recipient_list=[instance.pemail], message=message)


post_save.connect(patientemail, sender=patientinfo)


