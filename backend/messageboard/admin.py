from django.contrib import admin

# Register your models here.
from django.contrib import admin
from .models import Messages


class MessagesAdmin(admin.ModelAdmin):
    list_display = ['id', 'createTime', 'ipAddress', 'name', 'content']  # 字段顺序=界面上字段展示顺序，可随意调整


admin.site.register(Messages, MessagesAdmin)
