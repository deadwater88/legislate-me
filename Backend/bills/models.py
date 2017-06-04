from django.db import models

# Create your models here.

class Bill(Models.Model):
    billos_id = models.IntegerField(default=0)
    user_id = models.ForeignKey(User, on_delete=models.CASCADE)
    
