# Generated by Django 3.1.3 on 2020-11-30 18:35

from django.conf import settings
from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        migrations.swappable_dependency(settings.AUTH_USER_MODEL),
        ('expenses', '0001_initial'),
    ]

    operations = [
        migrations.RenameModel(
            old_name='Expenses',
            new_name='Expense',
        ),
    ]
