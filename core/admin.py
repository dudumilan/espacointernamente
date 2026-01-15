from django.contrib import admin
from .models import Artigo

@admin.register(Artigo)
class ArtigoAdmin(admin.ModelAdmin):
    list_display = ('titulo', 'publicado', 'criado_em')
    list_filter = ('publicado',)
    search_fields = ('titulo',)
