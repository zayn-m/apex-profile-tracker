import requests
from rest_framework.decorators import api_view
from rest_framework.response import Response

TRACKER_API_URL = 'https://public-api.tracker.gg/v2/apex/standard'
TRACKER_API_KEY = '10e945df-b8e1-40e1-ace3-496599990bdb'

@api_view()
def profile(request):

    headers = {
        'TRN-Api-Key': TRACKER_API_KEY,

    }
    platform = request.GET.get('platform')
    gamertag = request.GET.get('gamertag')

    r = requests.get(TRACKER_API_URL+'/profile'+f'/{platform}'+f'/{gamertag}', headers=headers)

    return Response(r.json())


