from django.contrib import admin
from market.models import (
    Seller, Buyer, Product, Bid
)
# Register your models here.
admin.site.register(Seller, admin.ModelAdmin)
admin.site.register(Buyer, admin.ModelAdmin)
admin.site.register(Product, admin.ModelAdmin)
admin.site.register(Bid, admin.ModelAdmin)