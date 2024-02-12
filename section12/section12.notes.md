# section 12 

## what is kubernetes
- system for running many different containers over multiple different machines
- spins up a cluster
- cluster is made of nodes + master
- master controls what each node does
- each node is a VM that runs containers

## why would we want to use it
- it is discouraged to use kubernetes with a project that has a single container
- when you need to run many different containers in different nodes
- when we want to scale out individual containers to serve higher traffic loads

### kubernetes dev vs prod
- in development we use minikube / dockerdesktop to spin up k8 cluster in our machine
  - kubectl manages containers in the node
  - minikube / docker desktop for managing a kube vm
- in production we use a managed solution to spin up and manage k8 clusters
  - on aws, eks
  - on gcp, gke

### kubernetes installed with wsl2
- enabling wsl can be a pain - following this articles solution fixed the problem for me - https://forums.docker.com/t/docker-wont-start-checking-if-isocache-exists-createfile-wsl-docker-desktop-data-isocache-the-network-name-cannot-be-found-n-n/134556/3

### kubernetes master
- takes instructions from user and applies changes to the cluster
- updates nodes following the specified rules























## Legacy

### Kubernetes basics graphs

#### Kubernetes Overview
![Kubernetes Overview](images/2019-11-17_13h52_22.jpg)

#### Kubernetes Dev vs Prod
![Kubernetes Dev vs Prod](images\2019-11-17_14h08_57.jpg)

#### Kubernetes Dev overview
![Kubernetes Dev overview](images\2019-11-17_14h09_19.jpg)