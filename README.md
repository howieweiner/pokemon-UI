# Pokemon UI

## Dependencies
The following dependencies are required to run this project:

* Node
* Github account
* Docker

## Node Version
This project has been built using Node 14. To ensure that the project builds correctly, ensure that version 14 is running. If you have [nvm](https://github.com/nvm-sh/nvm) installed, simply type `nvm use` to activate the correct version.

## API Server
The Pokemon UI server requires a local [API server](https://github.com/lucasbento/graphql-pokemon) to be running

To download and build the API server, run the following script:

`sh ./scripts/build-api-server.sh`

This script need only be run once. It will clone the API server from Git, then build a Docker container to run the server. The script expects Github SSH keys to be available to clone the repo, and for Docker to be running.

## Running the servers
To run both the API server and the Pokemon UI web server in production mode, type:

`docker-compose up`


