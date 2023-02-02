from django.urls import path
from . import views

urlpatterns = [
    # path('profile/', views.UserDetailsView.as_view(), name = 'profile'),
    path('house/<int:pk>/', views.HouseView.as_view(), name = 'house'),
    path('wia/', views.WIAView.as_view(), name = 'wia'),
    path('all-wia/',views.AllwiaView.as_view(), name="AllWia"),

]