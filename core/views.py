from django.shortcuts import render
from django.shortcuts import render, get_object_or_404
from .models import Artigo


def home(request):
    return render(request, 'core/index.html')

def artigos(request):
    artigos = Artigo.objects.filter(publicado=True).order_by('-criado_em')
    return render(request, 'core/artigos.html', {'artigos': artigos})

def artigo_detalhe(request, id):
    artigo = get_object_or_404(Artigo, id=id, publicado=True)
    return render(request, 'core/artigo_detalhe.html', {'artigo': artigo})
