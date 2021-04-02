# Generated by Django 3.1.6 on 2021-04-02 09:09

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Messages',
            fields=[
                ('ipAddress', models.GenericIPAddressField(auto_created=True)),
                ('id', models.IntegerField(primary_key=True, serialize=False)),
                ('name', models.CharField(max_length=20, verbose_name='姓名')),
                ('content', models.CharField(max_length=5000, verbose_name='content')),
                ('createTime', models.DateTimeField(auto_now_add=True)),
            ],
        ),
    ]
