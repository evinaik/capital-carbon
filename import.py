# This is written for PYTHON 3
# Don't forget to install requests package

import requests
import json
import random

customerId = '59381913a73e4942cdafd797'
apiKey = 'd313680b12769feb817a469882c676a4'

url = 'http://api.reimaginebanking.com/accounts/{}/purchases?key={}'.format(customerId,apiKey)
print(url)

r = requests.get(url)

with open('data.txt','w') as outfile:
    json.dump(r.json(), outfile)