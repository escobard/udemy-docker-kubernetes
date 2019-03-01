# Docker commands

- this section focuses purely on docker commands

## Docker Run

- `docker run [image-name]` - runs a docker image, with the given name
- `docker run [image-name] [command]` - runs a docker image, with the given name, and overwrites default starting command with given command
    - `docker run busybox echo hi there` starts up the `busybox container` and echoes the `hi there`
    - commands must be implicitely declared within the image's commands
- `docker run` - actually runs two commands, `docker create` + `docker start`

## Docker PS

- `docker ps` - lists all running docker containers
- `docker ps -all` - listings of all the containers we have ever created

## Docker Container lifecycles

- `docker create` - moves the snapshot over to the container, assigns an `id` to the container
- `docker start ID` - starts up the container, by running the start command, and passing the `id` outputted in the last step.

## Restarting Stopped Containers 
- running `docker start -a [id]` outputs the container's details
    - can be ran with `docker start [name] [command]`, and ran again with `docker start [id]`
        - starting a container this way will `run the same commands` issued within the `docker start [name] [command]`
        - cannot issue a new command if starting docker by id.

## Removing stopped containers
- running `docker ps --all` outputs all containers ever created under this machine.
    - we can clear the stopped containers by running `docker system prune`.
        - overwrite the warning, but its important to note that this command also removes:
            - networks not used by containers
            - dangling images
            - all build caches

## Retrieving log outputs
- running `docker logs [container id]` fetches the logs of the container.

## Stop running container
- running `docker stop [container id]` stops the container healthily, stops running processes safely.
    - this process runs for 10 seconds, before its shut down with the `kill` command.
- running `docker kill [container id]` forcefully destroys a docker container, without waiting for the running processes to gracefully shut down.
    - used to kill process quickly, and stop corrupt processes.

## Execute an additional command in a running container
- running `docker exec -it [container id] [command]`
    - to run redis cli as an example: `docker exec -it 09asdfajs redis-cli`
    - `-it` flag allows us to run commands input commands to the container
    - this is another way of running a command within a container, without explicitely accessing the terminal.
    
## Purpose of the IT flag
- every running process in linux (which is the docker default) has 3 running proces:
    - STDIN - handles inputs into the process
    - STDOUT - handles outputs into the process
    - STDERR - handles process errors
- `-i` allows for inputs
- `-t` specifies the output of the docker process.
- `-it` allows for inputs, tells the docker container that the outputs should be reflected in the `terminal`.

## Getting a command prompt in a container
- to open a linux terminal within a docker container, run: `docker exec it [docker id] sh`
    - the `sh` flag opens up a terminal, which runs and exists within the docker container.
-  to exit a terminal within a docker container, run `control + D`
    - another way to exit is simply typing the `exit` command within the running terminal.

## Starting a docker container with a terminal
- running `docker run -it busybox sh` runs the specified container, and starts a linux terminal after the container is initialized.

## side note, kernels:
- a kernel is UNIQUE to each docker container, docker containers do not share a kernel.
    - this is different with kubernetes where you have multiple containers in a pod, but more on that later.
    