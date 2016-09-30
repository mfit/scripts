#!/bin/bash
DIR="$( cd "$( dirname "${BASH_SOURCE[0]}" )" && pwd )"
echo $DIR
virtualenv $DIR/py
$DIR/py/bin/pip install boto3
