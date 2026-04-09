import os
import django

os.environ.setdefault("DJANGO_SETTINGS_MODULE", "meuprojeto.settings")
django.setup()

from django.contrib.auth import get_user_model

User = get_user_model()

USERNAME = os.environ.get("ADMIN_USERNAME", "admin")
EMAIL = os.environ.get("ADMIN_EMAIL", "admin@admin.com")
PASSWORD = os.environ.get("ADMIN_PASSWORD", "Admin123456!")

if not User.objects.filter(username=USERNAME).exists():
    User.objects.create_superuser(
        username=USERNAME,
        email=EMAIL,
        password=PASSWORD,
    )
    print("Superusuário criado com sucesso.")
else:
    print("Superusuário já existe.")