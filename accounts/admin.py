from django.contrib import admin
from .models import User

# Register your models here.
from rest_framework_simplejwt import token_blacklist

class OutstandingTokenAdmin(token_blacklist.admin.OutstandingTokenAdmin):

    def has_delete_permission(self, *args, **kwargs):
        return True

admin.site.unregister(token_blacklist.models.OutstandingToken)
admin.site.register(token_blacklist.models.OutstandingToken, OutstandingTokenAdmin)


@admin.register(User)
class UserAdmin(admin.ModelAdmin):
    """Define admin model for custom User model with no email field."""

    list_display = ('email', 'firstname', 'lastname', 'admin','is_active','is_verifiedPhone')
    search_fields = ('email', 'firstname', 'lastname')
    ordering = ('email',)


# admin.site.register(Shop)