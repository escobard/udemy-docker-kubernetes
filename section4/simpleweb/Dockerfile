# this is how you write comments in docker files

# User an existing docker image as a base, tells docker server what preparation steps to take
# A list of popular docker packages can be found here: https://hub.docker.com/

## this installs the alpine image of node.js from the docker server node repository.
### Alpine in the docker world means as small, stripped out and compact as possible
FROM node:alpine

# this adds a reference folder, as the working directory fo the container to utilize, to avoid installing file dependencies in root directory
## using the /usr/simpleweb directory - in linux the /usr location is a good place to store commonly used files
### can test this by using `docker exec -it [containerID] sh`, working directory 
WORKDIR /usr/simpleweb

# the COPY command copies files from the first specified directory, to the second specified directory in the docker container

## Copies all files in the parent directory to the parent docker directory - not best practice, but will do for now
### files here can be checked (assuming there is a tagged docker container running) with docker run -it escobard/simpleweb sh
COPY ./ ./

# Download and install dependencies 
## this installs our npm packages into the docker container - depends on npm being installed in the container, and package.json being available
RUN npm install

# Tell the image what to do when it starts

## run the npm start command
### this depends on the docker run -p 8080:5000 command, to utilize the 8080 port, within the docker container, to access the running node app on port 5000.
### For further clarity, the node.js port is 5000, but the docker container port which contacts the running node.js application is 8080
### This allows for intelligent port mapping functionality for production.
CMD ["npm", "start"]; 