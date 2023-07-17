from  .models import Person
from .serializers import PersonSerializer
from rest_framework.generics import ListAPIView,CreateAPIView,RetrieveAPIView ,UpdateAPIView,DestroyAPIView,ListCreateAPIView,RetrieveUpdateAPIView,RetrieveDestroyAPIView,RetrieveUpdateDestroyAPIView 
# Create your views here.
class PersonList(ListAPIView):
    queryset=Person.objects.all()
    serializer_class= PersonSerializer
class PersonCreate(CreateAPIView):
    queryset=Person.objects.all()
    serializer_class= PersonSerializer
class PersonRetrieve(RetrieveAPIView):
    queryset=Person.objects.all()
    serializer_class= PersonSerializer
class PersonUpdate(UpdateAPIView):
    queryset=Person.objects.all()
    serializer_class= PersonSerializer
class PersonDestroy(DestroyAPIView):
    queryset=Person.objects.all()
    serializer_class= PersonSerializer

class PersonListCreate(ListCreateAPIView):
    queryset=Person.objects.all()
    serializer_class= PersonSerializer

class PersonRetrieveUpdate(RetrieveUpdateAPIView):
    queryset=Person.objects.all()
    serializer_class= PersonSerializer   
class PersonRetrieveDestroy(
    RetrieveDestroyAPIView):
    queryset=Person.objects.all()
    serializer_class= PersonSerializer
class PersonRetrieveUpdateDestroy(RetrieveUpdateDestroyAPIView):
    queryset=Person.objects.all()
    serializer_class= PersonSerializer

