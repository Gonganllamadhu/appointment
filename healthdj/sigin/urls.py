from django.urls import path,include
from . import views
from rest_framework.authtoken.views import obtain_auth_token

urlpatterns=[
    path('signup/',views.signup),
    path('login/',obtain_auth_token),
    path('info/',views.patientappointment),
    path('appointmentinfo/',views.fetch_appointments),
    path('delappo/',views.delappo),
    path('docregister/',views.docregister)
]