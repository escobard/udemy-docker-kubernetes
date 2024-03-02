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

## combine k8s config into a single file
- can combine multiple k8s config into a single file
- seperate each config with: ---
- easier to relate config that is coupled
- harder to make sense of what config does by looking at file names
- its preference that dictates to keep individual or combined config files