from rest_framework.routers import DefaultRouter
from .views import SubjectViewSet, NoteViewSet

router = DefaultRouter()
router.register(r'subjects', SubjectViewSet, basename='subject')
router.register(r'notes', NoteViewSet, basename='note')

urlpatterns = router.urls
