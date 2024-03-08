# kubernetes load balancers
- a kubernetes service (now legacy? not very clear)
- way of getting network traffic into a cluster
- gives access to one specific object, per load balancer service

# kubernetes ingress
- a kubernetes service (recommended way to expose containers to the outside world)
- a way of exposing services to the outside world
- gives access to multiple services
- known as the ingress controller

## kubernetes ingress types
- ingres-ngnix - a community led project
  - this is what we will be using
- kubernetes-ingress - a project led by the company ngnix

### kubernetes ingress-ngnix
- works differently depending on your environment
  - local vs cloud
    - each cloud has different ingress-ngnix config
- different infrastructure depending on environment (confusing)

### kubernetes ingress-ngnix install
- official docs: https://kubernetes.github.io/ingress-nginx/deploy/#quick-start
- command:
  - kubectl apply -f https://raw.githubusercontent.com/kubernetes/ingress-nginx/controller-v1.10.0/deploy/static/provider/cloud/deploy.yaml