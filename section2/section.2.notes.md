# Docker commands

- this section focuses purely on docker commands

# Docker Run

- `docker run [image-name]` - runs a docker image, with the given name
- `docker run [image-name] [command]` - runs a docker image, with the given name, and overwrites default starting command with given command
    - `docker run busybox echo hi there` starts up the `busybox container` and echoes the `hi there`
    - commands must be implicitely declared within the image's commands