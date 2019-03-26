# this is how you write comments in docker files

# User an existing docker image as a base, tells docker server what preparation steps to take

## this is the linux / alpine version image from docker server, determines VM operating system
FROM alpine

# Download and install dependencies

## this adds a package any package globally to the container, using the linux `apk add` command to add the package to the docker image
RUN apk add --update redis

# Tell the image what to do when it starts

# As a container, do...
CMD ["redis-server"]