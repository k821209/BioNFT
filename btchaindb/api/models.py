from django.db import models
import hashlib
from btchaindb import settings
from django.utils import timezone
from django.contrib.auth.models import User
# Create your models here.

class Profile(models.Model):
    user = models.OneToOneField(User, on_delete=models.CASCADE)
    KlaytnPrivateKey = models.CharField(max_length=100)

class ProjectRecords(models.Model):
    PREF = "PJ"
    NUMS = 5
    class Meta:
        db_table = 'ProjectRecords'
    auto_id = models.AutoField(primary_key=True)
    title = models.CharField(max_length=50)
    desc = models.CharField(max_length=5000)
    def __str__(self):
        return str(self.auto_id)

    @property
    def perma_id(self):
        return self.PREF + str(self.auto_id).zfill(self.NUMS)

class BTRecords(models.Model):
    PREF = "PDF"
    NUMS = 5
    class Meta:
        db_table = 'BTRecords'
    auto_id = models.AutoField(primary_key=True)
    user_id = models.ForeignKey(User,on_delete=models.CASCADE,default=0)
    date= models.DateField(default=timezone.now)
    title = models.CharField(max_length=500)
    species = models.CharField(max_length=500,blank=True,null=True)
    sequence = models.TextField(blank=True,null=True)
    desc = models.TextField(blank=True,null=True)
    filedata = models.FileField(upload_to='uploads/%Y/%m/%d/')

    NFT = models.BooleanField(default=False)
    md5sum = models.CharField(max_length=50,blank=True,null=True)
    tx_hash = models.CharField(max_length=100,blank=True,null=True)
    def __str__(self):
        return str(self.auto_id)

    @property
    def filesize(self):
        x = self.filedata.size
        y = 512000
        if x < y:
            value = round(x/1000, 2)
            ext = ' kb'
        elif x < y*1000:
            value = round(x/1000000, 2)
            ext = ' Mb'
        else:
            value = round(x/1000000000, 2)
            ext = ' Gb'
        return str(value)+ext

    @property
    def perma_id(self):
        return self.PREF + str(self.auto_id).zfill(self.NUMS)

    @property
    def md5sum_done(self):
        if self.md5sum :
            pass
        else:
            hash = hashlib.md5(open(settings.MEDIA_ROOT + '/' + self.filedata.name,'rb').read()).hexdigest()
            self.md5sum = hash
            self.save()
        return 1
    
    @property
    def username(self):
        return self.user_id.username