Backup
------

Execute `backup.sh` to ...

1.  use `mongodump` to create bson export of the desired db
2.  tar-zip the data, name it by weekday and week-number
3.  Upload the files to S3

Install
-------

 - setup a virtualenv with the boto3 library: `py/init-env.sh`

 - reate AWS configuration in '.aws':

.aws/credentials

    [default]
    aws_access_key_id = ...
    aws_secret_access_key = ...

.aws/config

    [default]
    region=eu-west-1


Example S3 policy
------------------

Use  limited aws access policies - the file `s3-security-policy.json` contains
an example policy.

