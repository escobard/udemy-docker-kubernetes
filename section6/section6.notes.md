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
- running `docker run -p 3000:3000 -v $(pwd):/section6-ui`
    - `-v fileLocation` creates a volume, for the specified directory.
    - `$(pwd):/section6-ui` grabs the `working directory env variable` and `creates a volume within the specified docker working directory`.
- 