import os
import django

os.environ.setdefault("DJANGO_SETTINGS_MODULE", "meuprojeto.settings")
django.setup()

from django.contrib.auth import get_user_model

User = get_user_model()

USERNAME = os.environ.get("ADMIN_USERNAME", "dudumilan")
EMAIL = os.environ.get("ADMIN_EMAIL", "carloseduardomilann@gmail.com")
PASSWORD = os.environ.get("ADMIN_PASSWORD", "Jo@quim202")

if not User.objects.filter(username=USERNAME).exists():
    User.objects.create_superuser(
        username=USERNAME,
        email=EMAIL,
        password=PASSWORD,
    )
    print("Superusuário criado com sucesso.")
else:
    print("Superusuário já existe.")