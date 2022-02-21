from audioop import add
from rest_framework import serializers
from .models import addticket
from .models import discotecas

class addticketSerializer(serializers.ModelSerializer):
    class Meta:
        model = addticket
        fields = ('id', 'titulo', 'discoteca', 'dia', 'mes', 'precio', 'ciudad', 'instagram', 'estado', 'n_tel_comp', 'n_tel_vend')

class discotecasSerializer(serializers.ModelSerializer):
    class Meta:
        model = discotecas
        fields = ('id', 'nombre', 'foto')
