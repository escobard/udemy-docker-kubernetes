# Docker Compose
- docker-compose is used to run multiple docker containers in a single network, giving them free access to each other.
- this then runs 2 or more containers as services, simultaneously 
- 

## Docker Compose - Commands

### docker-compose up
- is the equivalent of `docker run [imageName]`
- can be ran with the `-d`, to run in detached mode.
    

### docker-compose up --build
- is the equivalent of `docker build .` and `docker run myimage`.

### docker-compose down
- stops the running 