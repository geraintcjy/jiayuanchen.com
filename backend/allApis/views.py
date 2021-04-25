from django.shortcuts import render, redirect
from django.views.decorators.csrf import ensure_csrf_cookie
from django.http import HttpResponse
from .models import Initialization, Messages


# Create your views here.
@ensure_csrf_cookie
def initialization(request):
    if request.method == 'POST':
        try:
            ipAddress = request.META['REMOTE_ADDR']
        except:
            ipAddress = '0.0.0.0'

        initialization = Initialization()
        initialization.ipAddress = ipAddress
        initialization.save()

    elif request.method == 'OPTIONS':
        res = HttpResponse('')
        res.__setitem__('Access-Control-Allow-Origin', '*')
        res.__setitem__('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, Authorization')
        res.__setitem__('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,PATCH,OPTIONS')
        return res

    return HttpResponse()


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

    elif request.method == 'OPTIONS':
        res = HttpResponse('')
        res.__setitem__('Access-Control-Allow-Origin', '*')
        res.__setitem__('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, Authorization')
        res.__setitem__('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,PATCH,OPTIONS')
        return res

    return redirect("http://jiayuanchen.com/submit")
