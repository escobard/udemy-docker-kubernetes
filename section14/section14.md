# multi container app with kubernetes
- swapping out node ports for cluster IP service

## node port vs cluster ip services
- cluster Ip exposes a set of pods to other objects in the cluster
  - allows other apps in the k8s network to talk to each other, only within the network
- nodePort exposes a set of pods to the outside world (only good for dev purposes!)

## k8s delete command
- kubectl delete <type of object> <name of object>
  - eg, kubectl delete deployment client-deployment

## k8s apply all config files in a directory
- kubectl apply -f <directory path>
  - eg, kubectl apply -f kubernetes

## k8s delete all config files in a directory
- kubectl delete -f <directory path>
  - eg, kubectl delete -f kubernetes

## k8s logs
- kubectl logs <name of pod>
  - eg, kubectl logs server-deployment-56685c959c-rj4s8

## why volumes are needed for databases in k8s
- to ensure data is persisted on container exits, k8s requires volumes for persistent data stores (databases)
- without volumes, container re-starts do not persist data from the previous container
- volume in container terminology - a mechanism that allows a container to access a filesystem outside of itself

## k8 volumes
- an object that allows a container to store data at the pod level
- three types of k8 volumes are available, volume, persistent volume and persistent volume claim
  - volume type does not persist data that needs to last! 
    - exists within a pod
    - volume type only exists for as long as the pod exists
    - data is lost on pod exit
  - we want to use persistent volume

### k8 persistent volume (PV)
- persists on pod and container exit
- new pod connects to the persisted volume that exists outside of a pod
- statically provisioned persistent volume has pre-determined harddrive (requires volume claims)
- dynamically provisioned persistent volume can swap out harddrive (does not require volume claims)

### k8 persistent volume claim (PVC)
- the rules / laws that determine the hardware available for volumes
- pvc claims can be used by pvs to create volumes with specified hardware

## k8 secrets object
- securely stores a piece of information in the cluster, such as a database password
- can be created with a command instead of a config file, to avoid storing secret logic in a static file
- command to create secret:
  - kubectl create secret <secret type - generic / docker-registry / tls> <secret name> --from-literal key=value
    - eg, kubectl create secret generic secret_name --from-literal secret_key=secret_value

## combine k8s config into a single file
- can combine multiple k8s config into a single file
- seperate each config with: ---
- easier to relate config that is coupled
- harder to make sense of what config does by looking at file names
- its preference that dictates to keep individual or combined config files