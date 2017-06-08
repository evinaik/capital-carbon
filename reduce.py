#!/usr/bin/python3

import sys

def main():
	prev = None
	count = 0 
	for line in sys.stdin: 
		pair = line.split('\t')
		if prev == pair[0]:
			count += float(pair[1])
		elif prev is None:
			prev = pair[0]
			count = float(pair[1])
		else:
			print(str(prev) + "\t" + str(count))
			prev = pair[0]
			count = float(pair[1]) 

	print(str(prev) + "\t" + str(count))

if __name__ == '__main__':
	main()