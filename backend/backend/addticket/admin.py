from django.contrib import admin
from .models import addticket
from .models import discotecas
# Register your models here.



class addticketAdmin(admin.ModelAdmin):
    list_display = ('titulo', 'discoteca', 'estado', 'precio', 'dia', 'mes', 'ciudad')

class discotecasAdmin(admin.ModelAdmin):
    list_display = ('nombre', 'foto')

# Register your models here.

admin.site.register(addticket, addticketAdmin)
admin.site.register(discotecas, discotecasAdmin)