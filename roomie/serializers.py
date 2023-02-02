from .models import user_details,House, house_gallary, previous_stay, education, work
from rest_framework import serializers



# class UserEducationSerializer(serializers.ModelSerializer):
#     class Meta:
#         model = user_education
#         fields = '__all__'

# class UserWorkSerializer(serializers.ModelSerializer):
#     class Meta:
#         model = user_work
#         fields = '__all__'

class HouseSerializer(serializers.ModelSerializer):
    class Meta:
        model = House
        fields = '__all__'


class HouseGallarySerializer(serializers.ModelSerializer):
    class Meta:
        models = house_gallary
        fields = '__all__'


class PreviousStaySerializer(serializers.ModelSerializer):
    class Meta:
        model = previous_stay
        fields = '__all__'


class EducationSerializer(serializers.ModelSerializer):
    class Meta:
        model = education
        fields = '__all__'


class WorkSerializer(serializers.ModelSerializer):
    class Meta:
        model = work
        fields = '__all__'


# class UserDetailsSerializer(serializers.ModelSerializer):
#     work  = serializers.SerializerMethodField()
#     education = serializers.SerializerMethodField()
    
#     class Meta:
#         model = user_details
#         fields = '__all__'

#     def get_work(self, obj):
#         print(obj)
#         data = WorkSerializer(obj.user_work.all(), many=True).data
#         return data

#     def get_education(self, obj):
#         data = EducationSerializer(obj.user_education.all(), many=True).data
#         return data
    

