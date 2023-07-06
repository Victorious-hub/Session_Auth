from django.contrib import admin
from django.urls import include
from rest_framework import permissions
from drf_yasg.views import get_schema_view
from drf_yasg import openapi
from django.urls import path
from content.views import SignupView, GetCSRFToken, LoginView, LogoutView, CheckAuthenticatedView

from users.views import GetUserProfileView, UpdateUserProfileView, GetUsers

schema_view = get_schema_view(
    openapi.Info(
        title="API Testing",
        default_version='v1',
        description="Here we are testing our api's",
        terms_of_service="https://www.google.com/policies/terms/",
        contact=openapi.Contact(email="contact@snippets.local"),
        license=openapi.License(name="BSD License"),
    ),
    public=True,
    permission_classes=[permissions.AllowAny],
)

urlpatterns = [
    path('admin/', admin.site.urls),
    path('', include('content.urls')),
    path(r'^swagger(?P<format>\.json|\.yaml)$', schema_view.without_ui(cache_timeout=0), name='schema-json'),
    path('swagger/', schema_view.with_ui('swagger', cache_timeout=0), name='schema-swagger-ui'),
    path(r'^redoc/$', schema_view.with_ui('redoc', cache_timeout=0), name='schema-redoc'),

    path('api/api.json/', schema_view.without_ui(cache_timeout=0), name='schema-swagger-ui'),

    path('authenticated', CheckAuthenticatedView.as_view()),
    path('register', SignupView.as_view()),
    path('login', LoginView.as_view()),
    path('logout', LogoutView.as_view()),
    path('csrf_cookie', GetCSRFToken.as_view()),
    path('user', GetUserProfileView.as_view()),
    path('update', UpdateUserProfileView.as_view()),

    path('users', GetUsers.as_view()),
]
