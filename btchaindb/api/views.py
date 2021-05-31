from django.shortcuts import render
from rest_framework.pagination import PageNumberPagination
from django_filters.rest_framework import DjangoFilterBackend
from rest_framework import viewsets
from .serializer import BTRecords_seri, Profile_seri
from .models import BTRecords, Profile
# Create your views here.
class StandardResultsSetPagination(PageNumberPagination):
    page_size = 5
    page_size_query_param = 'page_size'
    max_page_size = 1000

class BTRecords_view(viewsets.ModelViewSet):
    queryset = BTRecords.objects.all()
    serializer_class = BTRecords_seri
    filter_backends = (DjangoFilterBackend,)
    filter_fields = ['auto_id']
    pagination_class = StandardResultsSetPagination

class Profile_view(viewsets.ModelViewSet):
    queryset = Profile.objects.all()
    serializer_class = Profile_seri
    filter_backends = (DjangoFilterBackend,)
    filter_fields = ['user']
