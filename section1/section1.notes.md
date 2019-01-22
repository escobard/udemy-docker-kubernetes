# Docker

- Ecosystem of tools that developers use to contenirize applications
- Can be compared to Hyperledger toolkit

### Docker Client

- Command Line Interface (CLI) to communicate with docker server
- base command to login: `docker login` - must be used to connect with docker server
- runs the base hello-world docker image: `docker run hello-world` - confirms access do docker server

### Docker Server

- can be referred to Docker Daemon
- tool that is responsible for the creation of images, containers, and so much more!
- handles images, grabs the image from docker hub, returns images back to the docker client

### Docker Container

- VM whos sole purpose is to run the encapsulated software programs
- this is known as a container, which is an instance of an image.


### Docker image

- Single file with all the dependencies and configurations to run a program