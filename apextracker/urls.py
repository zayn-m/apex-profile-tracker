
from django.contrib import admin
from django.urls import path

from .api.views import profile

urlpatterns = [
    path('api/', profile, name='profile'),
    path('admin/', admin.site.urls),

]
