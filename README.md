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

To download the API server, run the following script:

`sh ./scripts/clone-api-server.sh`

This script need only be run once. It will clone the API server from Git. The script expects Github SSH keys to be available to clone the repo.

## Running the servers for Production
To run both the API server and the Pokemon UI web server in production mode, ensure that Docker is running, then type:

`docker-compose up`

The Pokemon UI web app will then be available at [http://localhost:3000](http://localhost:3000)

The web app supports pokemon ids in the URL e.g. [http://localhost:3000/150](http://localhost:3000/150)

## Running the servers for Development
When developing, the API server can be run standalone with:

```
docker-compose run --service-ports api
```

The UI app server can then be started in development mode with:

```
npm run dev
```

The Pokemon UI web app will then be available at [http://localhost:3000](http://localhost:3000)

## Running Tests
To run the unit tests, type:

```
npm run test
```

## Further Documentation
[Software Architecture](./docs/software-architecture.md)
