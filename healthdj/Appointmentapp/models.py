from django.db import models
from django.db.models.signals import pre_save
from django.core.mail import send_mail
from django.conf import settings


# Create your models here.

class Appointment(models.Model):
    appno = models.IntegerField(primary_key=True)
    patientname=models.CharField(max_length=20)
    date = models.DateField()
    doctorname=models.CharField(max_length=20)

    def __str__(self):
        return self.patientname

def empinserthandler(sender,instance,*args,**kwargs):
   subject='Test email'
   message = '''
   Hi {},
   Your Appointment for {}, on {}
   has successfully confirmed..!
  
   Regards,
   Star Hospitals 
   '''.format(instance.patientname,instance.doctorname,instance.date)
   send_mail(subject=subject,from_email=settings.EMAIL_HOST_USER,recipient_list=['gonganllamadhu018@gmail.com'],message=message)
pre_save.connect(empinserthandler,sender=Appointment)





