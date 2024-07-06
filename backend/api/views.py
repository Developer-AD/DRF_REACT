from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework import status

from rest_framework.renderers import JSONRenderer
from .models import Student
from .serializers import StudentSerializer
from rest_framework.response import Response
import io
from rest_framework.parsers import JSONParser
from django.views.decorators.csrf import csrf_exempt


# ==================================== Write Your Code Here ==========================================
# print('------------------- GET Start --------------------------------')
# # request.data : - Only works with POST, PUT, PATCH. etc.
# # username = request.query_params.get('key', None) #Standard.
# # username = request.GET.get('key')
# print('------------------- GET End --------------------------------')

@api_view(['GET', 'POST', 'PUT', 'PATCH', 'DELETE'])
def student_api(request, id=None):
    # ------------------------------------ VIEW ------------------------------
    if request.method == 'GET':
        # If you don't send id in url, you sent as params then use this.
        # id = request.query_params.get('id', None)
        if id is not None:
            try:
                student = Student.objects.get(id=id)
                serializer = StudentSerializer(student)

                return Response(serializer.data)
            except Student.DoesNotExist:
                response = {'msg': 'Student not found..!'}
                return Response(response, status=status.HTTP_404_NOT_FOUND)

        # If Id id None then send all data.
        students = Student.objects.all()
        serializer = StudentSerializer(students, many=True)
        return Response(serializer.data)

    if request.method == 'POST':
        print('------------------- POST Start --------------------------------')
        print(request.data)
        print('------------------- POST End --------------------------------')

        serializer = StudentSerializer(data=request.data)

        if serializer.is_valid():
            serializer.save()
            response = {'msg': 'Data inserted successfully..!'}
            return Response(response, status=status.HTTP_201_CREATED)

        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    # -------------------------------- PUT -------------------------------------------------
    if request.method == 'PUT':
        try:
            student = Student.objects.get(id=id)
            serializer = StudentSerializer(student, data=request.data)

            if serializer.is_valid():
                serializer.save()
                response = {'msg': 'Complete Data Updated Successfully..!'}
                return Response(response, status=status.HTTP_200_OK)
            return Response(serializer.errors)

        except Student.DoesNotExist:
            return Response({"msg": "Student not found..!", 'status': 400})

# -------------------------------- PATCH -------------------------------------------------
    if request.method == 'PATCH':
        if id is not None:
            try:
                student = Student.objects.get(id=id)

                serializer = StudentSerializer(
                    student, data=request.data, partial=True)  # partial update.

                if serializer.is_valid():
                    serializer.save()
                    response = {'msg': 'Partial Data Updated Successfully..!'}
                    return Response(response, status=status.HTTP_200_OK)

                return Response(serializer.errors)

            except Student.DoesNotExist:
                response = {"msg": "Student not found..!"}
                return Response(response, status=status.HTTP_400_BAD_REQUEST)

        return Response({'msg': 'ID Not Sent'}, status=status.HTTP_400_BAD_REQUEST)


# -------------------------------- DELETE ------------------------------------------
    if request.method == 'DELETE':
        if id is not None:
            try:
                student = Student.objects.get(id=id)
                student.delete()
                response = {'msg': 'Data Deleted Successfully..!'}
                return Response(response, status=status.HTTP_200_OK)

            except Student.DoesNotExist:
                response = {"msg": "Student not found..!"}
                return Response(response, status=status.HTTP_400_BAD_REQUEST)

        response = {'msg': 'ID Not Sent'}
        return Response(response, status=status.HTTP_400_BAD_REQUEST)
