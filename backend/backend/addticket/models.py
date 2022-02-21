from django.db import models

# Create your models here.

class addticket(models.Model):
    titulo = models.CharField(max_length=120)
    discoteca = models.TextField()
    dia = models.CharField(max_length=2, null=True)
    mes = models.CharField(max_length=25, null=True)
    precio = models.FloatField(null=True)
    ciudad = models.TextField(max_length=20,default="Prueba")
    instagram = models.TextField(max_length=20,default="@tu_instagram")
    n_tel_comp = models.CharField(max_length=9,default="000000000")
    n_tel_vend = models.CharField(max_length=9,default="000000000")
    estado = models.BooleanField(default=False)

    def _str_(self):
        return self.titulo

class discotecas(models.Model):
    nombre = models.CharField(max_length=120)
    foto = models.TextField()
    estado = models.BooleanField(default=False)

    def _str_(self):
        return self.titulo