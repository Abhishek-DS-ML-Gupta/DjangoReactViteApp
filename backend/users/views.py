from rest_framework import generics
from .serializers import UserSerializer

class SignupView(generics.CreateAPIView):
    serializer_class = UserSerializer
