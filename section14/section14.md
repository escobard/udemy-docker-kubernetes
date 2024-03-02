# multi container app with kubernetes
- swapping out node ports for cluster IP service

## node port vs cluster ip services
- cluster Ip exposes a set of pods to other objects in the cluster
  - allows other apps in the k8s network to talk to each other, only within the network
- nodePort exposes a set of pods to the outside world (only good for dev purposes!)