# Generated by Django 2.2.4 on 2019-09-02 22:40

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('market', '0004_bid_accepted'),
    ]

    operations = [
        migrations.AddField(
            model_name='product',
            name='link',
            field=models.SlugField(blank=True, max_length=150),
        ),
    ]
