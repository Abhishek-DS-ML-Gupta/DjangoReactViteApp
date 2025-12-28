from django.contrib import admin
from django.urls import path, include

urlpatterns = [
    path("admin/", admin.site.urls),
    path("auth/", include("users.urls")),  # ✅ points to users.urls
    path("study/", include("study.urls")),
]
