#Command to run a docker image :
##docker run -v %cd%:/app:ro -v /app/node_modules --env PORT=4000 -p 3200:4000 -d --name node-app node-app-image

##building a brand new build using docker-compose
###docker-compose up -d --build
[markdown-basics](https://www.freecodecamp.org/news/markdown-cheatsheet/)

##using one docker-file to run both the production environment and production environment
####docker-compose -f docker-compose.yml -f docker-compose.prod.yml up -d => production environment
####docker-compose -f docker-compose.yml -f docker-compose.dev.yml up -d => development environment

###deleting any image running
####docker-compose -f docker-compose.yml -f docker-compose.prod.yml down -v => production
####docker-compose -f docker-compose.yml -f docker-compose.dev.yml down -v => development

###Rebuilding the image ####**docker-compose -f docker-compose.yml -f docker-compose.dev.yml up -d --build**

####\*\*logging to database
######docker exec -it node-docker-mongo-1 mongosh -u "kimura" -p "root"
