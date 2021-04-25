from django.contrib import admin

# Register your models here.
from django.contrib import admin
from .models import Initialization


class InitializationAdmin(admin.ModelAdmin):
    list_display = ['id', 'loginTime', 'ipAddress']  # 字段顺序=界面上字段展示顺序，可随意调整


admin.site.register(Initialization, InitializationAdmin)
