from django.urls import path
from rest_framework.urlpatterns import format_suffix_patterns
from market.api import views 

app_name = "market_api"

format_suffix_patterns(
    urlpatterns = [
        path('users/', views.UserListView.as_view(), name="user_list"),
        path('sellers/', views.SellerListView.as_view(), name="seller_list"),
        path('buyers/', views.BuyerListView.as_view(), name="buyer_list"),
        path('products/', views.ProductListView.as_view(), name="product_list"),
        path('bids/', views.BidListView.as_view(), anme="bid_list"),
        path('users/<int:pk>/', views.UserDetailView.as_view(), name="user_detail"),
        path('sellers/<slug:link>/', views.SellerDetailView.as_view(), name="seller_detail"),
        path('buyers/<slug:link>/', views.BuyerDetailView.as_view(), name="buyer_detail"),
        path('products/<slug:link>/', views.ProductDetailView.as_view(), name="product_detail"),
        path('bids/<int:pk>/', views.BidDetailView.as_view(), name="bid_detail"),
        path('', views.digisouq_api_root, name="digisouq_api_root")
    ]
)