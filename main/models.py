
from django.db import models


class Project(models.Model):

    title = models.CharField(max_length=150)

    description = models.TextField()

    technologies = models.CharField(max_length=250)

    github_link = models.URLField(blank=True)

    live_link = models.URLField(blank=True)

    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.title


class Contact(models.Model):

    name = models.CharField(max_length=100)

    email = models.EmailField()

    subject = models.CharField(max_length=200)

    message = models.TextField()

    created_at = models.DateTimeField(auto_now_add=True)

    is_read = models.BooleanField(default=False)

    def __str__(self):
        return self.name
