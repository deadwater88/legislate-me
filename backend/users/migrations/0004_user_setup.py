# -*- coding: utf-8 -*-
# Generated by Django 1.11.2 on 2017-06-11 08:41
from __future__ import unicode_literals

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('users', '0003_auto_20170611_0223'),
    ]

    operations = [
        migrations.AddField(
            model_name='user',
            name='setup',
            field=models.BooleanField(default=False),
        ),
    ]
