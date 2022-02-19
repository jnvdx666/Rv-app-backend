from django.shortcuts import render
from django.shortcuts import render
from rest_framework import viewsets
from .serializers import addticketSerializer
from .models import addticket
from .serializers import discotecasSerializer
from .models import discotecas

# Create your views here.

class addticketView(viewsets.ModelViewSet):
    serializer_class = addticketSerializer
    queryset = addticket.objects.all()

class discotecasView(viewsets.ModelViewSet):
    serializer_class = discotecasSerializer
    queryset = discotecas.objects.all()
