#!/bin/bash

# Change to location of the script
SCRIPT_LOCATION="$( cd "$( dirname "${BASH_SOURCE[0]}" )" && pwd )"
cd $SCRIPT_LOCATION

DBNAME = "dbname"
BUCKETBASE = "bucketbase"
BACKUPBUCKET = "backup"

# Dump data
mysqldump $DBNAME > 'today.sql'

# Get names for weekly and daily
_dayofweekbackup=$(date +"%w")
_weekbackup=$(date +"%W")
_daily="easy_day_$_dayofweekbackup.tgz"
_weekly="easy_week_$_weekbackup.tgz"

# Zip and copy to get weekly and daily
tar -czf $_daily 'today.sql'
cp $_daily $_weekly

# Upload to desired bucket
"py/bin/python" upload.py "$_daily" $BUCKETBASE "$BACKUPBUCKET/$_daily"
"py/bin/python" upload.py "$_weekly" $BUCKETBASE "$BACKUPBUCKET/$_weekly"

echo $(date) " - backup ok! "
