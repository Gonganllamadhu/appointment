# Generated by Django 5.0.1 on 2024-05-01 16:06

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('sigin', '0003_alter_patientinfo_pphone'),
    ]

    operations = [
        migrations.AlterField(
            model_name='patientinfo',
            name='pdate',
            field=models.DateField(),
        ),
    ]