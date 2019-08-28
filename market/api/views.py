from django.http import Http404
from rest_framework.response import Response 
from rest_framework import generics 
from rest_framework.reverse import reverse 

import django.contrib.auth.models import User 
#Import the Market app's models and API Serializers
from market.models import (Seller, Buyer, Product, Bid)
from market.api.serializers import (
    UserSerializer, SellerSerializer, BuyerSerializer, ProductSerializer, BidSerializer
)

#Import the Authentication and Permission classes to control access to certain
# API endpoints/data
from rest_framework.decorators import (api_view, authentication_classes)
from rest_framework.authentication import (
    BasicAuthentication, SessionAuthentication, TokenAuthentication
)
from rest_framework.permissions import (
    IsAuthenticated, IsAuthenticatedOrReadOnly, DjangoModelPermissions
)


@api_view(['GET'])
def digisouq_api_root(request, format=None):
    """
    Root/home page of the DigiSouq APIs
    """
    return Response({
        'users': reverse('market_api:user_list', request=request, format=format),
        'sellers': reverse('market_api:seller_list', request=request, format=format),
        'buyers': reverse('market_api:buyer_list', request=request, format=format),
        'products': reverse('market_api:product_list', request=request, format=format),
        'bids': reverse('market_api:bid_list', request=request, format=format)
    })

