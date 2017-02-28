> These directions assume that you already have Docker installed and are operating from within the root directory of this repo where the Dockerfile is located

# Build image from Dockerfile
```Shell
sudo docker build -t keystone-standalone .
```

---

# Setup
In either case, we want to expose port 3000 (Keystone)

## Run MongoDB Container
docker run -p 27017:27017 -v /var/mongodb:/data/db --name mongo -d mongo

## Run in interactive mode with removal on exit
```Shell
docker run -it --rm -p 3000:3000 -v /var/mongodb:/data/db --link mongo:mongo --name keystone-standalone keystone-standalone
```
## Run as daemon
```Shell
docker run -d -p 3000:3000 -v /var/mongodb:/data/db --link mongo:mongo --name keystone-standalone keystone-standalone
```

### Killing the daemon
```Shell
docker stop keystone-standalone
```

### Checking usage statistics, etc
```Shell
docker stats
```
or
```Shell
docker ps
```
