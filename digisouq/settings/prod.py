"""
 Settings module to be used in the production environment.
"""
from digisouq.settings.main import *

# SECURITY WARNING: don't run with debug turned on in production!
DEBUG = False 

ALLOWED_HOSTS = ['digisouq.com','127.0.0.1','localhost','SERVER_IP_ADDRESS']

#STATIC ASSETS and MEDIA FILES Management 

STATIC_ROOT = ''

MEDIA_ROOT = ''

MEDIA_URL = ''
