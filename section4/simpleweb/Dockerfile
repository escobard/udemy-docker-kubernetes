# this is how you write comments in docker files

# User an existing docker image as a base, tells docker server what preparation steps to take
# A list of popular docker packages can be found here: https://hub.docker.com/

## this installs the alpine image of node.js from the docker server node repository.
### Alpine in the docker world means as small, stripped out and compact as possible
FROM node:alpine

# Download and install dependencies

## this installs our npm packages into the docker container - depends on npm being installed in the container
RUN npm install

# Tell the image what to do when it starts

## run the npm start command
CMD ["npm", "start"];