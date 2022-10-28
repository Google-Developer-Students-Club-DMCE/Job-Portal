from django.contrib import admin

from posthand.models import Postapi

# Register your models here.
class LocationAdmin(admin.ModelAdmin):
    list_display = ('designation','company','description','location')
admin.site.register(Postapi,LocationAdmin)
