# -*- coding: utf-8 -*-
# Generated by Django 1.11.2 on 2017-06-10 04:39
from __future__ import unicode_literals

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('bills', '0002_auto_20170610_0436'),
    ]

    operations = [
        migrations.AlterField(
            model_name='bill',
            name='os_id',
            field=models.CharField(db_column='os_id', max_length=50, unique=True),
        ),
    ]
