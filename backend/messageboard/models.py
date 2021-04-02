from django.db import models


# Create your models here.
class Messages(models.Model):
    id = models.AutoField(primary_key=True)  # 自增主键, 这里不能设置default属性，负责执行save的时候就不会新增而是修改元素
    name = models.CharField('姓名', max_length=20)
    content = models.CharField('content', max_length=5000)
    createTime = models.DateTimeField(auto_now_add=True)
    ipAddress = models.GenericIPAddressField(auto_created=True)

    # 指定表名 不指定默认APP名字——类名(appName_Student)
    # class Meta:
    #    db_table = 'student'
