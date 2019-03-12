# this is how you write comments in docker files

# User an existing docker image as a base

## this is the linux / alpine version image from docker 
FROM alpine

# Download and install a dependency
RUN apk add --update redis

# Tell the image what to do when it starts

# As a container, do...
CMD ["redis-server"]