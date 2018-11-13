#!/bin/bash

mkdir -p ~/docker/volumes/db-data/

node ../data/app.js

#course_data.json need to format(delete outside key) to json array.
cp ../data/course_data.json ~/docker/volumes/db-data/

docker run -p 27017:27017 -v ~/docker/volumes/db-data:/tmp -d mongo 

docker exec -it <container-id> bash

(in container)
mongoimport  --db ncnu --collection class --file tmp/course_data.json --jsonArray

