from django.shortcuts import render, redirect
from django.views.decorators.csrf import ensure_csrf_cookie

from .models import Initialization


# Create your views here.
@ensure_csrf_cookie
def initialization(request):
    if request.POST:
        try:
            ipAddress = request.META['REMOTE_ADDR']
        except:
            ipAddress = '0.0.0.0'

        initialization = Initialization()
        initialization.ipAddress = ipAddress
        initialization.save()

    return redirect("http://jiayuanchen.com/")
