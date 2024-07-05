from rest_framework import serializers
from .models import Student

# ------------------- Model Serializer Start -----------------------
class StudentSerializer(serializers.ModelSerializer):
    # If we update all fields then also our 'name' field will not update.
    # name = serializers.CharField(read_only=True) # Working.
    # roll = serializers.IntegerField(read_only=True) # Working.
    class Meta:
        model = Student

        # fields = ['id', 'name', 'roll', 'city']
        fields = '__all__'

        # exclude = ['roll']

        # ------------ Validations --------------
        # 1. Field Level Validation:-
        # def validate_roll(self, value):
        #     if value>20:
        #         raise serializers.ValidationError('Seat Full')
        #     return value
        # ------------ Validations --------------
# ------------------- Model Serializer End -----------------------