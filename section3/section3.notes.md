# Creating Docker Images

- this section focuses on creating new docker images, via using dockerfiles

## Instructions

- Determined by `./Dockerfile` refer to that file for syntax comments

## Mental exercise to visualize docker containers 

- Imagine you are installing chrome, on a fresh new PC.
- What would you do?
- Steps to take:

1. install os.
2. Start up default browser.
3. Navigate to chrome.google.com
4. Download installer.
5. Open file/folder explorer.
6. Execute chrome_installer.exe
7. Execute chrome.exe

- These are manual steps taken by an individual to install chrome.
- These same steps are used in the `./Dockerfile` to create a docker image.

## docker build .

- the command `docker build .` explained:
    - `docker` calls the running docker CLI
    - `build` uses the `Dockerfile` in the directory to build a docker image.
    - `.` determines the build context -  set of files and folders that belong to our project, using the selected directory as the base.

## build steps:

- each step represents a `command within the docker file`.
- for each step, it checks if we `the docker CLI has the command output stashed`.

## FROM commands:

- if it doesn't it pulls the `package / image / whatever` from a remote location.

## RUN commands:

- specifies intermediate container per step.
    - an intermediate container, is a temporary docker image, that contains the container with JUST that step.
    - the intermediate container is removed, and a temporary image is created with JUST that step if succesful.
    
## CMD commands:

- uses the previously created temporary image from the RUN command.
- creates a new intermediate image, where the command is ran.
- if succesful, removes intermediate image, creates a final image ID.
- this ID contains the final docker image, which we then use to start our container / running docker VM.

### Intermediate docker images.

- this is a docker image that is created while a step is running, for every step.
- this outputs a TEMPORARY IMAGE.

### Temporary image: 

- created after each step is succesfully ran, based off the intermediate docker image created in the step.
- this temporary image is then used in the following step as the base.

### Rebuilds with Cache
- changing a base docker file, grabs the CACHED image for the previous step.
    - this allows for rapid rebuilding of image steps that bage been built on your machine.
- this destroys the cached intermediate image for every step after.
    - essentially this means that every step after the changed lined of a docker file, requires new intermediate images

### Tagging an image
- using `docker build -t escobard/containerName:latest .`
    - `docker build` explained above.
    - `-t` tags the image with a name, to re-use with `docker build containerName`.
    - `escobard/test:latest` first argument is the user's docker username, second argument is the container name, last argument is the version of the image from docker server, usually latest.
    - `.` grabs the dockerfile from the current directory.
- images that have simple names like `docker build redis` are community images, that do not follow this convention.
- can run this version with `docker run escobar/test`.
    - there is a common warning on windows, which may make it seem like the container wasn't tagged, but it is.

### Docker commit
- using `docker commit -c 'CMD ["redis-server"]' containerId`
    - customizes the running docker container, with new functionality.
    - `docker commit -c` updates the running image with the parameters provided.
    - `'CMD ["redis-server"]' ` adds a command to the container.
    - this outputs an ID with the modified container.
- using `docker run newContainerID` runs the new modified docker image, in a new container.
- not the default way of creating containers, but its an option if necessary.