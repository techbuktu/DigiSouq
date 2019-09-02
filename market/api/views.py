from django.http import Http404
from rest_framework.response import Response 
from rest_framework import generics 
from rest_framework.reverse import reverse 

from django.contrib.auth.models import User 
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

from rest_framework import filters


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
        'bids': reverse('market_api:bid_list', request=request, format=format),
        'Obtain Auth Token': reverse('market_api:auth_token', request=request, format=format), 
    })


class UserListView(generics.ListCreateAPIView):
    """
    Performs GET (all) and POST requests against the User API endpoint.
    """
    queryset = User.objects.all()
    serializer_class = UserSerializer
    lookup_field = "pk"
    #authentication_classes = []
    #permission_classes = []

class UserDetailView(generics.RetrieveUpdateDestroyAPIView):
    """
    Performs GET (one), PUT and DELETE operations on the User API.
    """
    queryset = User.objects.all()
    serializer_class = UserSerializer
    lookup_field = "pk"
    #authentication_classes = [TokenAuthentication]
    #permission_classes = [IsAuthenticated]

class SellerListView(generics.ListCreateAPIView):
    """
    Performs GET (all) and POST actions on the SellerSerializer.
    """
    queryset = Seller.objects.all()
    serializer_class = SellerSerializer
    lookup_field = "link"
    authentication_classes = [TokenAuthentication]
    permission_classes = [IsAuthenticatedOrReadOnly]

class SellerDetailView(generics.RetrieveUpdateDestroyAPIView):
    """
    Makes GET (one), PUT and DELETE requests against the Seller API.
    """
    queryset = Seller.objects.all()
    serializer_class = SellerSerializer
    lookup_field = "link"
    authentication_classes = [TokenAuthentication]
    permission_classes = [IsAuthenticatedOrReadOnly]

class BuyerListView(generics.ListCreateAPIView):
    """
    Makes GET (all) and POST requests against the Buyer API endpoint
    """
    queryset = Buyer.objects.all()
    serializer_class = BuyerSerializer
    lookup_field = "link"
    authentication_classes = [TokenAuthentication]
    permission_classes = [IsAuthenticatedOrReadOnly]

class BuyerDetailView(generics.RetrieveUpdateDestroyAPIView):
    """
    Makes GET, PUT and DELETE requests a single Buyer API endpoint
    """
    queryset = Buyer.objects.all()
    serializer_class = BuyerSerializer
    lookup_field = "link"
    authentication_classes = [TokenAuthentication]
    permission_classes = [IsAuthenticatedOrReadOnly]

class ProductListView(generics.ListCreateAPIView):
    """
    Performs GET (all) and POST requests actions on the Product API endpoint.
    """
    queryset = Product.objects.all()
    serializer_class = ProductSerializer
    lookup_field = "link"
    authentication_classes = [TokenAuthentication]
    permission_classes = [IsAuthenticatedOrReadOnly]

    def get_queryset(self):
        """
        Conditionally return list of products by the supplied 'seller' or 'buyer'
        query parameters in the URL.
        """
        queryset = Product.objects.all()
        buyer = self.request.query_params.get('buyer', None)
        seller = self.request.query_params.get('seller', None)
        if seller:
            queryset = queryset.filter(seller__link=seller)
        return queryset
        
class ProductDetailView(generics.RetrieveUpdateDestroyAPIView):
    """
    Performs GET, PUT and DELETE requests against a single Product API endpoint
    """
    queryset = Product.objects.all()
    serializer_class = ProductSerializer
    lookup_field = "link"
    authentication_classes = [TokenAuthentication]
    permission_classes = [IsAuthenticatedOrReadOnly]

class BidListView(generics.ListCreateAPIView):
    """
    Makes GET (all) and POST requests against the root Bid API.
    """
    queryset = Bid.objects.all()
    serializer_class = BidSerializer
    lookup_field = "pk"
    authentication_classes = [TokenAuthentication]
    permission_classes = [IsAuthenticatedOrReadOnly]

class BidDetailView(generics.RetrieveUpdateDestroyAPIView):
    """
    Makes GET, PUT and DELETE requests against a single Bid API endpoint.
    """
    queryset = Bid.objects.all()
    serializer_class = BidSerializer
    lookup_field = "pk"
    authentication_classes = [TokenAuthentication]
    permission_classes = [IsAuthenticatedOrReadOnly]