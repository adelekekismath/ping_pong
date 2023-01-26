docker network create icvad

docker run --network=icvad -e PORT=8080 --name registry -d icvad/registry
docker run --network=icvad -e PORT=4567 -e REGISTRY=http://registry:8080 -e ADDRESS=http://s0 --name s0 -d icvad/s0
docker run --network=icvad -e PORT=5372 -e REGISTRY=http://registry:8080 -e ADDRESS=http://s1 --name s1 -d icvad/s1
