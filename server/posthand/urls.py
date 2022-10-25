from django.contrib import admin
from django.urls import path

from .views import AddPost, home

urlpatterns = [
    path('getpost/',home,name='home_of_api'),
    path('addpost/', AddPost.as_view({'post': 'create'}), name='add_post')
]
