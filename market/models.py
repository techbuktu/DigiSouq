from django.db import models
from django.contrib.auth.models import User 
from django.utils import timezone
from django.utils.text import slugify 

# Create your models here.
class Seller(models.Model):
    """
    A User who creates an account on the platform with the intent to offer Products to other users
    to be bid on.
    """
    user = models.OneToOneField(
        User, 
        related_name = "seller",
        on_delete = models.CASCADE
    )
    about = models.TextField()
    link = models.SlugField(max_length=150, blank=True)

    def __str__(self):
        return self.user.username 

    def save(self, *args, **kwargs):
        if not self.link:
            self.link = slugify(self.user.username)
        super(Seller, self).save(*args, **kwargs)

class Buyer(models.Model):
    """
    A Profile for a user who registers with the intent to bid on a Product/commodity.
    """
    user = models.OneToOneField(
        User, 
        related_name = "buyer",
        on_delete =  models.CASCADE
    )
    link = models.SlugField(max_length=150, blank=True)

    def __str__(self):
        return self.user.username 

    def save(self, *args, **kwargs):
        if not self.link:
            self.link = slugify(self.user.username)
        super(Buyer, self).save(*args, **kwargs)

class Product(models.Model):
    """
    Represents a commodity available for bidding on.
    """
    name = models.CharField(max_length=100)
    desc = models.TextField(max_length=500, verbose_name="Description")
    quantity = models.PositiveIntegerField(default=0)
    seller = models.ForeignKey(
        Seller,
        related_name="products",
        on_delete = models.CASCADE
    )

    def save(self, *args, **kwargs):
        if not self.link:
            self.link = slugify(self.name)
        super(Product, self).save(*args, **kwargs)


class Bid(models.Model):
    buyer = models.ForeignKey(
        Buyer, 
        related_name = "bids",
        on_delete = models.CASCADE
    )
    product = models.ForeignKey(
        Product, 
        related_name = "bids",
        on_delete = models.CASCADE
    )
    amount = models.DecimalField(
        decimal_places = 2, 
        verbose_name="Bid Amount",
        max_digits = 7)
    bid_date = models.DateTimeField(auto_now_add=True)

    class Meta:
        ordering = ['amount','bid_date']

    def __str__(self):
        return "%s on %s" % (self.amount, self.product.name)

