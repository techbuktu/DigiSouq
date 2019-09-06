# Generated by Django 2.2.4 on 2019-09-06 20:17

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('market', '0005_product_link'),
    ]

    operations = [
        migrations.AlterField(
            model_name='buyer',
            name='link',
            field=models.SlugField(blank=True, max_length=150, unique=True),
        ),
        migrations.AlterField(
            model_name='product',
            name='link',
            field=models.SlugField(blank=True, max_length=150, unique=True),
        ),
        migrations.AlterField(
            model_name='seller',
            name='link',
            field=models.SlugField(blank=True, max_length=150, unique=True),
        ),
    ]