#!/usr/bin/python3

from pymongo import MongoClient
import datetime
import pprint

client = MongoClient()
db = client.test_database

collection = db.test_collection


def read_info(f):
	lines = f.readlines()
	
	for line in lines:
		
		words = line.split("\t")
		if collection.find({"company": words[0]}):
			print(words[0])
			print(collection.find({"company": words[0]}).count())
			collection.update(
				{"company": words[0]}, 
				{'$push':
					{
					'sales':
						{
						'datetime': datetime.datetime.now(),
						'value': float(words[1])	
						}
					}
				})
		else:
			collection.insert(
				{
					"company": words[0], 
					'sales':
						{
						'datetime': datetime.datetime.now(),
						'value': float(words[1])	
						}
				}
				)

file1 = open("out/part-00000")
read_info(file1)
file1.close()

file2 = open("out/part-00001")
read_info(file2)
file2.close()

file3 = open("out/part-00002")
read_info(file3)
file3.close()

file4 = open("out/part-00003")
read_info(file4)
file4.close()

file5 = open("out/part-00004")
read_info(file5)
file4.close()

#pprint.pprint(collection.find_one())
