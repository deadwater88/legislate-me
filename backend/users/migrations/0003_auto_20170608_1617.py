# -*- coding: utf-8 -*-
# Generated by Django 1.11.2 on 2017-06-08 16:17
from __future__ import unicode_literals

import django.contrib.postgres.fields
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('users', '0002_auto_20170606_1803'),
    ]

    operations = [
        migrations.AddField(
            model_name='user',
            name='subjects',
            field=django.contrib.postgres.fields.ArrayField(base_field=models.CharField(max_length=250, null=True), default=[], size=None),
        ),
        migrations.AlterField(
            model_name='user',
            name='first_name',
            field=models.CharField(default='', max_length=50),
        ),
        migrations.AlterField(
            model_name='user',
            name='last_name',
            field=models.CharField(default='', max_length=50),
        ),
    ]
