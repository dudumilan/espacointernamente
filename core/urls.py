from django.urls import path
from .views import home, artigos, artigo_detalhe

urlpatterns = [
    path('', home, name='home'),
    path('artigos/', artigos, name='artigos'),
    path('artigos/<int:id>/', artigo_detalhe, name='artigo_detalhe'),
]
