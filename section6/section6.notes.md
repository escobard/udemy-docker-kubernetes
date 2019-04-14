# Production Workflow with Docker
- automated testing and deployment for docker w/ aws & travis cli

## Building off docker file
- use `docker build -f Dockerfile.dev .`
- builds the container using the rules in the file name preceding the `-f` flag.
- the ` .` after the file name specified the file's directory, in this case the directory the `Dockerfile.dev` file is under.

## Docker volumes
- using the previous straight copy method we used to generate containers is flawed, for development.
    - in other words, changing the local file will not update the running container files natively, which is a big problem for development
- Enter docker volumes - sets up mapping from a folder outside the container, to a folder inside the container.
    - we avoided using docker volumes before, because its more complex to set up volues without the use of docker-compose

### Docker volumes - Docker
- running `docker run -p 3000:3000 -v /app/node_modules -v $(pwd):/section6-ui`
    - `-v fileLocation` creates a volume, for the specified directory.
    - `-v /app/node_modules` tells docker to ignore the `node_modules` folder within the container when using the parent directory volume.
        - ensures the `local node_modules` is not `volumized within the running container`.
    - `$(pwd):/section6-ui` grabs the `working directory env variable` and `creates a volume within the specified docker working directory`.
- in reality most containers will not actually need such a complex run command, since volumes are more easily set up within docker-compose

### Docker running container - commands
- can use `docker exec -it <container name> sh` to access running container terminal
- can start the container with a specific command with `docker run containerId command`
    - for example `docker run j32asfa2 npm run test`
- imo, easier to just access running terminal and then run commands on the terminal itself

### List running processes in a container
- user `docker exec -it [containerId] sh` to access running container terminal
- run `ps` within the running container, to list all running processes.
    - PID lists the process ID.

### Nginx
- a web server used primarily with linux VMs.
- can be used alongside docker containers to serve different content in production environments vs dev.
- used mostly in today's world to `host simple static content`.
- for our purposes, used to serve the `build version of our react app (production version with create-react-app)`

### Docker phases
- when a docker file utilizes other container processes to build its own container
- refer to `Dockerfile.prod` within the `./ui` directory for clarity.
- the important point is that doing things in phases, caches the `phase files, and harddrive utilization` for use in later phases.
    - in other words files, packages, etc used during initial phases, are only cached and used to output the final phase.
    - the files for the initial phase are only temporarily created.
    - this means the build folder can be delivered on its own, even if the other files / packages necessary for the build are created prior to the build, since only the build folder is stored into the computer's hard drive.
    - very very useful for CD, avoids pointless memory usage.