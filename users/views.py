from django.contrib.auth.models import User
from rest_framework import permissions
from rest_framework.views import APIView
from rest_framework.response import Response

from content.serializers import UserSerializer
from .models import UserProfile
from .serializers import UserProfileSerializer


class GetUsers(APIView):
    permission_classes = (permissions.AllowAny,)

    def get(self, reqeuest):
        users = User.objects.all()

        users = UserSerializer(users, many=True)
        return Response(users.data)


class GetUserProfileView(APIView):
    def get(self, request, format=None):
        user = self.request.user
        username = user.username

        user_profile = UserProfile.objects.get(user=user)
        user_profile = UserProfileSerializer(user_profile)

        return Response({'profile': user_profile.data, 'username': str(username)})


class UpdateUserProfileView(APIView):
    def put(self, request, format=None):
        try:
            user = self.request.user
            username = user.username

            data = self.request.data
            first_name = data['first_name']
            last_name = data['last_name']
            phone = data['phone']
            city = data['city']

            UserProfile.objects.filter(user=user).update(first_name=first_name, last_name=last_name, phone=phone,
                                                         city=city)

            user_profile = UserProfile.objects.get(user=user)
            user_profile = UserProfileSerializer(user_profile)

            return Response({'profile': user_profile.data, 'username': str(username)})
        except:
            return Response({'error': 'Something went wrong when updating profile'})
