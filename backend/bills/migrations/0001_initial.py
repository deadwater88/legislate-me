# -*- coding: utf-8 -*-
# Generated by Django 1.11.2 on 2017-06-10 04:12
from __future__ import unicode_literals

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Bill',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('subject', models.CharField(blank=True, default='', max_length=100)),
                ('os_id', models.CharField(db_column='os_id', max_length=50)),
                ('sponsor', models.CharField(max_length=100)),
                ('title', models.CharField(max_length=5000)),
                ('chamber', models.CharField(max_length=100)),
                ('state', models.CharField(max_length=20)),
                ('summary_url', models.CharField(max_length=500)),
                ('blurb', models.CharField(max_length=100)),
                ('first', models.DateField(blank=True, default='')),
                ('last', models.DateField(blank=True, default='')),
                ('bill_id', models.CharField(db_column='bill_id', default='', max_length=100)),
                ('img_id', models.IntegerField(default=0)),
                ('check', models.CharField(blank=True, default='', max_length=50)),
            ],
        ),
    ]
