# section 13 goal
- multi-container deployments in k8s with declerative deployments

# kubectl delete
- deletes an object from k8s cluster
- kubectl delete -f <config file>
- goes through the same process as killing a docker container:
  - attempts to turns container off
  - container gets killed after a time delay

# kubectl describe
- prints out detailed information about an object on k8
- kubectl describe pod client-pod
  - kubectl describe <object type> <object name>

# leveraging a declarative approach 
- pass a new updated config file to kubectl
  - each config file has a 
    - name
    - type/kind
    - image
- master inspects the name and kind properties of config file
  - if master finds an object with an identical name and type/kind
    - it will not create a new object and instead update existing objects with new configuration

## declarative deployments shortcomings
- cannot update the image or port of a pod
- to get past this, a different kind of object can be dispatched to update clusters

## deployment objects
- maintains a set of container rules
- ensures the right number of containers are always running
- can run a set of identical pods (one or more)
  - can be thought of as a pod template creator
- monitors the state of each pod, updating as necessary
- good for maintaining dev and production environments
- it is recommended to use deployment objects instead of pods for release environments

## updating deployment image versions
- can be solved through image tags in the docker image
  - only solves future images, running images will not grab the latest version
  - triggers a new pod update only if there is a version change
  - adds an extra step to increase the version with every deployment
- use an imperative command to force an update on a pod with a dockerhub image
  - very long command
  - kubectl set image <object_type> / <object_name> <container_name> = <new_container_image>

### browse deployment objects
- command - kubectl get deployments
- specifies stats for each container in the deployment

## service objects
- service acts as a load balancer / proxy to route requests to pods
- route traffic to pods that have a matching selector