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
- Simulate an operating system, gives the ability to define and manipulate a kernel
- considered as part of the namespacing practice
- utilizes file snapshot of the image, and attaches it to kernel of the container, controlling the processes memory & harddrive usage

### Docker image

- Single file with all the dependencies and configurations to run a program
- sends a snapshot of the files the container needs
- also contains the commands the image needs

#### Operating System - Kernel

- Kernel manages system calls, and handles the interaction of software with physical hardware such as:
    - cpu
    - memory
    - hard disk
- basically governs access between your programs and your actual harddrive 

#### Namespacing - software practice

- Isolating resources per process ( or group of processes ) - what is known in docker as a container
- Also allows for further tweaking of processes such as network communications (ports), users, process, unique to that instance of the namespace

#### Control Groups - software practice

- limit the amount of resources that a particular process can use
- controls memory, cpu usage, network bandwidth, and manages all memory usage of a process
