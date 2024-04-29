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
