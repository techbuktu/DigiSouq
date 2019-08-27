"""
 Settings module to be used during developmen/in dev environment only.
"""
from digisouq.settings.main import *

# SECURITY WARNING: don't run with debug turned on in production!
DEBUG = True

ALLOWED_HOSTS = ['localhost', '127.0.0.1']

#STATIC ASSETS and MEDIA FILES Management 

STATIC_ROOT = ''

MEDIA_ROOT = ''

MEDIA_URL = ''
