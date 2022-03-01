"""backend URL Configuration

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/3.2/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""
from django.contrib import admin
from django.urls import path, include
from rest_framework import routers
from addticket import views
from django.urls import include, re_path


router = routers.DefaultRouter()
router.register(r'addticket', views.addticketView, 'addticket')
router.register(r'discotecas', views.discotecasView, 'discotecas')
re_path(r'^\.well-known/', include('letsencrypt.urls'))
re_path(r'^.well-known/acme-challenge/', include('acme_challenge.urls')),


urlpatterns = [
    path('admin/', admin.site.urls),
    path('api/', include(router.urls)),
]
