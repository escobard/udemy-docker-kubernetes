# Docker deployment with travic CI / AWS

## Travis CI

- Must ensure that the `parent folder of the repository` contains the .travis.yml file.
- language option must be set or ruby is assumed as the base OS.
- scripts are only ran on merges to master, not 

## AWS

### Elastic beanstalk
- the top choice for running individual docker containers on a server
- can be used to quickly deploy and create an environment
- creates a load balancer that routes the request that is running docker
    - monitors traffic that comes in to our application
    - if lots of traffic comes into our application, it will create a new VM with a copy of the application   
- watch deployment applicaation here: http://dockerreact-env.h2egqtzfzk.us-east-2.elasticbeanstalk.com/