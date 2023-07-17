from rest_framework import serializers
from .models import Person
class PersonSerializer(serializers.Serializer):
    name=serializers.CharField(max_length=100)
    email=serializers.CharField(max_length=30)
    password=serializers.CharField(max_length=100)