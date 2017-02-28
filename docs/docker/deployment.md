> These directions assume that you already have Docker installed and are operating from within the root directory of this repo where the Dockerfile is located

# Build image from Dockerfile
```Shell
sudo docker build -t keystone-standalone .
```

---

# Execute
In either case, we want to expose port 3000 (Keystone) as well as provide a local location for any MongoDB data (for backups sake or if we want to instantiate the instance with a pre existing dataset).

The local data storage location can be created with the following command (sudo might be necessary). If you have an existing dataset, simply copy it here.

```Shell
mkdir -p /var/mongodb
```

## Run in interactive mode with removal on exit
```Shell
docker run -it --rm -p 3000:3000 -v /var/mongodb:/data/db --name keystone-standalone keystone-standalone
```
## Run as daemon
```Shell
docker run -d -p 3000:3000 -v /var/mongodb:/data/db --name keystone-standalone keystone-standalone
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
