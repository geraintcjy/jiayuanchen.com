from django.contrib import admin
from .models import Initialization, Messages


class InitializationAdmin(admin.ModelAdmin):
    list_display = ['id', 'loginTime', 'ipAddress']  # 字段顺序=界面上字段展示顺序，可随意调整


class MessagesAdmin(admin.ModelAdmin):
    list_display = ['id', 'createTime', 'ipAddress', 'name', 'content']


admin.site.register(Messages, MessagesAdmin)
admin.site.register(Initialization, InitializationAdmin)
