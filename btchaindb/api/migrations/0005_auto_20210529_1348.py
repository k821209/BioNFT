# Generated by Django 3.1.3 on 2021-05-29 13:48

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0004_btrecords_tx_hash'),
    ]

    operations = [
        migrations.AddField(
            model_name='btrecords',
            name='sequence',
            field=models.TextField(blank=True, null=True),
        ),
        migrations.AddField(
            model_name='btrecords',
            name='species',
            field=models.CharField(blank=True, max_length=50, null=True),
        ),
        migrations.AlterField(
            model_name='btrecords',
            name='desc',
            field=models.TextField(blank=True, null=True),
        ),
        migrations.AlterField(
            model_name='btrecords',
            name='tx_hash',
            field=models.CharField(blank=True, max_length=100, null=True),
        ),
    ]
