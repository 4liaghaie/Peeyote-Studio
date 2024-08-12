from django.shortcuts import render
from . models import Landing, Landing1, Landing2, Portrait, Commercial, Commercial1, Portrait1




def home(request):
    landings = Landing.objects.all()
    landings1 = Landing1.objects.all()
    landings2 = Landing2.objects.all()
    return render(request, 'home.html', {"landings": landings, "landings2": landings2, "landings1": landings1})
# Create your views here.

def portrait(request):
    portraits =Portrait.objects.all()
    portraits1 = Portrait1.objects.all()
    return render(request, "portrait.html",{"portraits": portraits, "portraits1":portraits1} )

def commercial(request):
    commercials = Commercial.objects.all()
    commercials1 = Commercial1.objects.all()
    return render(request, "commercial.html",{"commercials":commercials, "commercials1":commercials1})

def about(request):
    return render(request, "about.html")
