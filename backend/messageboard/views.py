from django.shortcuts import render, redirect
from django.views.decorators.csrf import ensure_csrf_cookie

from .models import Messages


# Create your views here.
@ensure_csrf_cookie
def postMessage(request):
    if request.POST:
        name = request.POST.get('name')
        content = request.POST.get('content')
        try:
            ipAddress = request.META['REMOTE_ADDR']
        except:
            ipAddress = '0.0.0.0'

        message = Messages()
        message.name = name
        message.content = content
        message.ipAddress = ipAddress
        message.save()

    return redirect("http://jiayuanchen.com")
