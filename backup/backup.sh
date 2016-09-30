#!/bin/bash
# Run a mongodb export and create zipped tarfiles of it
DIR="$( cd "$( dirname "${BASH_SOURCE[0]}" )" && pwd )"
_backupdir="$HOME/mongodb-backups"

mkdir -p $_backupdir
cd $_backupdir
rm dump -Rf

mongodump --db DBNAME

_dayofweekbackup=$(date +"%w")
_weekbackup=$(date +"%W")
_daily="backup_day_$_dayofweekbackup.tgz"
_weekly="backup_week_$_weekbackup.tgz"

tar -czf $_daily dump
cp $_daily $_weekly

cd $DIR
"py/bin/python" upload.py "$_backupdir/$_daily" baseBucketName "subfolder/$_daily"
"py/bin/python" upload.py "$_backupdir/$_weekly" baseBucketName "subfolder/$_weekly"

echo $(date) " - backup ok! "
