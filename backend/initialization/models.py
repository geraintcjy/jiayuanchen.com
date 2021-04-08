from django.db import models


# Create your models here.
class Initialization(models.Model):
    id = models.AutoField(primary_key=True)  # 自增主键, 这里不能设置default属性，负责执行save的时候就不会新增而是修改元素
    loginTime = models.DateTimeField(auto_now_add=True)
    ipAddress = models.GenericIPAddressField(auto_created=True)
