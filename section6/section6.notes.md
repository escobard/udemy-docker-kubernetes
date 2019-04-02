# Production Workflow with Docker
- automated testing and deployment for docker w/ aws & travis cli

## Building off docker file
- use `docker build -f Dockerfile.dev .`
- builds the container using the rules in the file name preceding the `-f` flag.
- the ` .` after the file name specified the file's directory, in this case the directory the `Dockerfile.dev` file is under.