from django.urls import path
from . import views
from .views import RegisterationView, UsernameValidationView, EmailValidationView,VerificationView,LoginView,logout,reset_password,CompletePasswordReset
from django.views.decorators.csrf import csrf_exempt

urlpatterns = [
    path('register', RegisterationView.as_view(), name='register'),
    path('login', LoginView.as_view(), name='login'),
    path('validate-username', csrf_exempt(UsernameValidationView.as_view()),
         name='validate-username'),
    path('validate-email', csrf_exempt(EmailValidationView.as_view()),
         name='validate-email'),
     path('activate/<uidb64>/<token>', VerificationView.as_view(), name='activate'),
     path('logout',views.logout,name='logout'),
     path('reset-password',reset_password.as_view(),name='reset-password'),
     path('set-new-password/<uidb64>/<token>', CompletePasswordReset.as_view(), name='reset-user-password'),
]
