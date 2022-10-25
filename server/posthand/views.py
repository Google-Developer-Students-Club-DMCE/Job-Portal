from django.shortcuts import render
from django.http import HttpResponse

from rest_framework import viewsets
from rest_framework.decorators import api_view
from rest_framework.response import Response
from posthand.models import Postapi

from rest_framework import status
from posthand.serializers import Postserializers


# Create your views here.
@api_view(['GET'])
def home(request):
    if request.method=='GET':
        stu=Postapi.objects.all()
        serializer = Postserializers(stu, many=True)
        return Response(serializer.data)
    return Response({'data':'Invalid method'},status=status.HTTP_204_NO_CONTENT)


class AddPost(viewsets.ModelViewSet):
    serializer_class = Postserializers

    def get_serializer_context(self):
        context = super().get_serializer_context()
        context.update({"request": self.request})
        return context
