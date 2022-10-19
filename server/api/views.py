from django.http import HttpResponse


def index(request):
    return HttpResponse("Hello, world. You're at the polls index.")

from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from rest_framework import permissions
from .models import Image
from .serializers import ImageSerializer


class processXray(APIView):
	def post(self, request, *args, **kwargs):
		image_url = ''
		try:
			image = Image(image_url = request.FILES.get('image'))
			image.save()
			return HttpResponse(image.image_url.url)
		except Exception as e:
			return HttpResponse(e)