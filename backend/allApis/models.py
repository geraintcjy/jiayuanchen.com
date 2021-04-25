from django.db import models


# Create your models here.
class Messages(models.Model):
    id = models.AutoField(primary_key=True)  # 自增主键, 这里不能设置default属性，负责执行save的时候就不会新增而是修改元素
    name = models.CharField('姓名', max_length=30, null=True)
    content = models.CharField('content', max_length=5000)
    createTime = models.DateTimeField(auto_now_add=True)
    ipAddress = models.GenericIPAddressField(auto_created=True)

    class Meta:
        db_table = 'messages'


class Initialization(models.Model):
    id = models.AutoField(primary_key=True)  # 自增主键, 这里不能设置default属性，负责执行save的时候就不会新增而是修改元素
    loginTime = models.DateTimeField(auto_now_add=True)
    ipAddress = models.GenericIPAddressField(auto_created=True)

    class Meta:
        db_table = 'initialization'
