# Generated by Django 4.0.2 on 2023-07-25 11:11

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('portfolio', '0002_portrait'),
    ]

    operations = [
        migrations.CreateModel(
            name='Commercial',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('alt', models.CharField(max_length=100)),
                ('image', models.ImageField(blank=True, default=None, null=True, upload_to='')),
            ],
        ),
    ]
