# This is written for PYTHON 3
# Don't forget to install requests package

import requests
import json
import random

customerId = '59381913a73e4942cdafd797'
apiKey = 'd313680b12769feb817a469882c676a4'
merchants = ['57cf75cea73e494d8675ec49', '57cf75cea73e494d8675ec4b', '57cf75cea73e494d8675ec4c', '57cf75cea73e494d8675ec4d',
'57cf75cea73e494d8675ec4e', '57cf75cea73e494d8675ec4f', '57cf75cea73e494d8675ec50', '57cf75cea73e494d8675ec51']

url = 'http://api.reimaginebanking.com/accounts/{}/purchases?key={}'.format(customerId,apiKey)
print(url)

for i in range(100000):
	for item in merchants:
		payload = {
		  "merchant_id": item,
		  "medium": "balance",
		  "purchase_date": "2017-06-07",
		  "amount": random.uniform(1, 1000),
		  "description": "new purchase"
		}

		# Create a Savings Account
		response = requests.post( 
			url, 
			data=json.dumps(payload),
			headers={'content-type':'application/json'},
			)

		if response.status_code == 201:
			print('account created')