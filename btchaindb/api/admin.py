from django.contrib import admin
from .models import BTRecords, Profile
# Register your models here.
class ProfileAdmin(admin.ModelAdmin):
    list_display = (
        'user',
        'KlaytnPrivateKey',

    )

admin.site.register(Profile, ProfileAdmin)

class BTRecordsAdmin(admin.ModelAdmin):
    list_display = (
        'title',
        'desc',
        'filedata',
        'filesize',
        'md5sum_done',
        'md5sum',
        'NFT'
    )

admin.site.register(BTRecords, BTRecordsAdmin)