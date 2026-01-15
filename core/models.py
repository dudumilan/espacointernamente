from django.db import models

class Artigo(models.Model):
    titulo = models.CharField(max_length=200)
    resumo = models.TextField()
    conteudo = models.TextField()
    publicado = models.BooleanField(default=True)
    criado_em = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.titulo
