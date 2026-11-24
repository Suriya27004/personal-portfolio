
from django.contrib import admin
from .models import Project, Contact


@admin.register(Project)
class ProjectAdmin(admin.ModelAdmin):

    list_display = (
        'title',
        'technologies',
        'created_at'
    )

    search_fields = ('title', 'description')


@admin.register(Contact)
class ContactAdmin(admin.ModelAdmin):

    list_display = (
        'name',
        'email',
        'subject',
        'is_read',
        'created_at'
    )

    list_filter = ('is_read', 'created_at')

    search_fields = ('name', 'email', 'subject')

    readonly_fields = ('created_at',)
