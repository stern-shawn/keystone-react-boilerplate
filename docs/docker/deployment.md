> These directions assume that you already have Docker installed and are operating from within the root directory of this repo where the Dockerfile is located

# (Optional) Build image from Dockerfile
```Shell
sudo docker build -t keystone-standalone .
```
_While this option exists_, it's easier and safer to simply use the commands below which will download a pre-built and stable version of the Docker image from Docker Hub.

---

# Setup
Feel free to modify the arguments to these commands as you see fit, however, please note that the respective containers must expose port 3000 (Keystone) and port 27017 (default for MongoDB). Also, MongoDB should be running before the Keystone container is run, otherwise it will fail to launch (no database connection).

## Run MongoDB Container
sudo docker run -p 27017:27017 -v /var/mongodb:/data/db --name mongo -d mongo

## Run Keystone in interactive mode with removal on exit
```Shell
sudo docker run -it --rm -p 3000:3000 -v /var/mongodb:/data/db --link mongo:mongo --name keystone-standalone sternshawn/keystone-standalone
```
## Run Keystone as daemon
```Shell
sudo docker run -d -p 3000:3000 -v /var/mongodb:/data/db --link mongo:mongo --name keystone-standalone sternshawn/keystone-standalone
```

### Killing the daemon
```Shell
sudo docker stop keystone-standalone
```
Use the same command with mongo as the argument if you need to also stop the DB.

### Monitoring usage statistics, etc
```Shell
sudo docker stats
```
or
```Shell
sudo docker ps
```
