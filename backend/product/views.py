from django.shortcuts import render
from .serializers import ProductSerializer
from rest_framework import viewsets
from .models import Product
#
# cCreate your views here.
class ProductView(viewsets.ModelViewSet):
    queryset = Product.objects.all()
    serializer_class = ProductSerializer