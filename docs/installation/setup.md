# Set up MongodDB Community Edition for Ubuntu 16.04
[Reference](https://docs.mongodb.com/master/tutorial/install-mongodb-on-ubuntu/?_ga=1.141877237.693987556.1487310249)

```
sudo apt-key adv --keyserver hkp://keyserver.ubuntu.com:80 --recv 0C49F3730359A14518585931BC711F9BA15703C6
echo "deb [ arch=amd64,arm64 ] http://repo.mongodb.org/apt/ubuntu xenial/mongodb-org/3.4 multiverse" | sudo tee /etc/apt/sources.list.d/mongodb-org-3.4.list
sudo apt-get update
sudo apt-get install -y mongodb-org
sudo mkdir -p /data/db
```

# Run MongoDB
Run this in a separate terminal instance or as a background process
```
sudo mongod
```

# Install dependencies
## Client App
Go to the client folder, install dependencies, and build files for serving

```
cd keystone_client_boilerplate
yarn
yarn build
```

## Keystone/Backend
Go back one level to the main project folder, install dependencies, and run Node/Express server

```
cd .. (if still in /keystone_client_boilerplate)
yarn
yarn start
```
