import boto3
import sys

if len(sys.argv) < 4:
    print("Usage : upload.py <filename> <s3-bucket-name> <s3-key>")
    exit(0)

s3 = boto3.resource('s3')

fname = sys.argv[1]
bucket = sys.argv[2]
key = sys.argv[3]
data = open(fname, 'rb')

s3.Bucket(bucket).put_object(Key=key, Body=data)

print("S3 put object {} to {}".format(fname, key))
