# Generated by Django 5.0.1 on 2024-05-09 05:44

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('sigin', '0005_alter_patientinfo_pemail'),
    ]

    operations = [
        migrations.AddField(
            model_name='userdetails',
            name='phoneno',
            field=models.CharField(default=9505975798, max_length=20),
            preserve_default=False,
        ),
    ]