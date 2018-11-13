#!/bin/bash

mkdir -p ~/docker/volumes/db-data/
node ../data/app.js
cp ../data/course_data.json ~/docker/volumes/db-data/
# docker run -d -v ~/docker/volumes/db-data/:/tmp mongo
docker run -p 27017:27017 -v ~/docker/volumes/db-data:/tmp -d mongo
mongoimport  --db ncnu --collection class --file tmp/course_data.json --jsonArray