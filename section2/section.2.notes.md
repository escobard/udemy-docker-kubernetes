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