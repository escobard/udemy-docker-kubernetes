# this is how you write comments in docker files

# User an existing docker image as a base, tells docker server what preparation steps to take

## this is the linux / alpine version image from docker server, determines VM operating system
FROM alpine

# Download and install dependencies

## this installs our npm packages into the docker container
RUN npm install

# Tell the image what to do when it starts

## run the npm start command
CMD ["npm", "start"];