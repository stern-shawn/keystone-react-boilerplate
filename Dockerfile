# Dockerizing the Keystone + React + MongodDB + Node stack on Latest Ubuntu LTS

FROM       ubuntu:latest
MAINTAINER Shawn W. Stern <stern.shawn@gmail.com>

RUN rm /bin/sh && ln -s /bin/bash /bin/sh

# Grab the MongoDB key and add to the list file
RUN apt-key adv --keyserver hkp://keyserver.ubuntu.com:80 --recv 0C49F3730359A14518585931BC711F9BA15703C6
RUN echo "deb [ arch=amd64,arm64 ] http://repo.mongodb.org/apt/ubuntu xenial/mongodb-org/3.4 multiverse" | tee /etc/apt/sources.list.d/mongodb-org-3.4.list

# Update sources and install MongodDB
RUN apt-get update && apt-get install -y mongodb-org

# Create standard MongoDB data directory
#RUN mkdir -p /data/db

# Install curl just in case
RUN apt-get install -y curl

RUN apt-get install -y build-essential libssl-dev

ENV NVM_DIR /usr/local/nvm
ENV NODE_VERSION 6.9.1

# Install NVM and get Node environment installed
RUN curl https://raw.githubusercontent.com/creationix/nvm/v0.33.1/install.sh | bash \
    && source $NVM_DIR/nvm.sh \
    && nvm install $NODE_VERSION \
    && nvm alias default $NODE_VERSION \
    && nvm use default

ENV NODE_PATH $NVM_DIR/v$NODE_VERSION/lib/node_modules
ENV PATH      $NVM_DIR/versions/node/v$NODE_VERSION/bin:$PATH

# Install yarn for a speed boost
RUN npm install -g yarn

# Install Git
RUN apt-get install -y git

# Clone and build our App
RUN git clone https://github.com/stern-shawn/keystone-react-boilerplate.git /keystone
RUN cd /keystone/keystone_client_boilerplate && yarn && yarn build && cd .. && yarn

# Exectue MongoDB as a background process, and run app
#RUN mongod &
#RUN cd /keystone && yarn start

# Expose ourselves to the world
EXPOSE 3000

WORKDIR /keystone
ENTRYPOINT ["./run.sh"]
