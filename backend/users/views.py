from rest_framework.decorators import api_view, permission_classes
from rest_framework.permissions import IsAuthenticated, AllowAny
from rest_framework.response import Response
from django.contrib.auth import authenticate
from rest_framework_simplejwt.tokens import RefreshToken
from .serializers import SignupSerializer, UserSerializer

# ---------------------------
# SIGNUP VIEW
# ---------------------------
@api_view(['POST'])
@permission_classes([AllowAny])  # Ensure public access
def signup(request):
    serializer = SignupSerializer(data=request.data)
    serializer.is_valid(raise_exception=True)
    serializer.save()
    return Response({"message": "Signup successful!"}, status=201)

# ---------------------------
# LOGIN VIEW
# ---------------------------
@api_view(['POST'])
@permission_classes([AllowAny])  # Ensure public access
def login(request):
    username = request.data.get('username')
    password = request.data.get('password')

    # Authenticate user
    user = authenticate(username=username, password=password)
    if user is not None:
        refresh = RefreshToken.for_user(user)
        return Response({
            "access": str(refresh.access_token),
            "refresh": str(refresh),
            "username": user.username,
            "email": user.email,
            "id": user.id,
        })
    
    return Response({"detail": "Invalid credentials"}, status=401)

# ---------------------------
# GET CURRENT USER
# ---------------------------
@api_view(['GET'])
@permission_classes([IsAuthenticated])  # Protected route
def me(request):
    serializer = UserSerializer(request.user)
    return Response(serializer.data)
