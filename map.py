#!/usr/bin/python3


import sys, re, json

for line in sys.stdin:
	
	data = json.loads(line)

	for item in data:
		print(item['merchant_id'] + '\t' + str(item['amount']))

