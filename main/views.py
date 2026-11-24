
from django.shortcuts import render, redirect
from django.contrib import messages
from .models import Project, Contact


def home(request):

    projects = Project.objects.all().order_by('-created_at')

    if request.method == 'POST':

        name = request.POST.get('name', '').strip()
        email = request.POST.get('email', '').strip()
        subject = request.POST.get('subject', '').strip()
        message = request.POST.get('message', '').strip()

        if not all([name, email, subject, message]):

            messages.error(request, 'Please fill all fields.')

        else:

            Contact.objects.create(
                name=name,
                email=email,
                subject=subject,
                message=message
            )

            messages.success(
                request,
                'Your message has been submitted successfully!'
            )

        return redirect('home')

    return render(request, 'index.html', {
        'projects': projects
    })
