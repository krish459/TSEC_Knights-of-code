from django.contrib import admin
from .models import user_details,House, house_gallary, previous_stay, education, work



# Register your models here.
admin.site.register(user_details)
admin.site.register(House)
admin.site.register(house_gallary)
admin.site.register(previous_stay)
admin.site.register(education)
admin.site.register(work)