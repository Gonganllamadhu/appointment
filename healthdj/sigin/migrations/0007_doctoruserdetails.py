# Generated by Django 5.0.1 on 2024-05-20 06:34

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('sigin', '0006_userdetails_phoneno'),
    ]

    operations = [
        migrations.CreateModel(
            name='doctoruserdetails',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('username', models.CharField(max_length=30)),
                ('password', models.CharField(max_length=30)),
                ('email', models.CharField(max_length=50)),
            ],
        ),
    ]
