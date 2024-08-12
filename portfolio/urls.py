from django.urls import path
from . import views

app_name = 'portfolio'

urlpatterns = [
    path('', views.home, name='Home' ),
    path('portrait', views.portrait, name='portrait'),
    path('commercial', views.commercial, name='commercial'),
    path('about', views.about, name="about")

]