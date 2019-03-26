# this is how you write comments in docker files

# User an existing docker image as a base, tells docker server what preparation steps to take
# A list of popular docker packages can be found here: https://hub.docker.com/

## this installs the alpine image of node.js from the docker server node repository.
### Alpine in the docker world means as small, stripped out and compact as possible
FROM node:alpine

# the COPY command copies files from the first specified directory, to the second specified directory in the docker container

## Copies all files in the parent directory to the parent docker directory - not best practice, but will do for now
COPY ./ ./

# Download and install dependencies 
## this installs our npm packages into the docker container - depends on npm being installed in the container, and package.json being available
RUN npm install

# Tell the image what to do when it starts

## run the npm start command
CMD ["npm", "start"]; 