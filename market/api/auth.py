from rest_framework.authtoken.views import ObtainAuthToken
from rest_framework.authtoken.models import Token 
from rest_framework.response import Response 

class DigiSouqAuthToken(ObtainAuthToken):
    def post(self, request, *args, **kwargs):
        """
        View to take username and password values and  generate or return auth tokens
        for the authenticated User.
        """
        serializer = self.serializer_class(data=request.data, context={'request':request})
        serializer.is_valid(raise_exception=True)
        user = serializer.validated_data['user']
        token, created = Token.objects.get_or_create(user=user)
        return Response({
            'token': token.key,
            'user_id': user.pk
        })

