from rest_framework import serializers
from .models import BTRecords, Profile

class BTRecords_seri(serializers.ModelSerializer):
    class Meta:
        model = BTRecords
        fields = ('title', 'desc','filesize', 'filedata','perma_id','md5sum','NFT','date','username','auto_id','user_id','tx_hash')

class Profile_seri(serializers.ModelSerializer):
    class Meta:
        model = Profile
        fields = ('user', 'KlaytnPrivateKey')
