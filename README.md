# Adorable Avatars Docker Image

A simple docker image for running an [adorable avatars](https://github.com/adorableio/avatars-api-middleware) API server.

# Known issue
it only support node 12 as one of the modules `lovell/sharp` is outdated see https://github.com/lovell/sharp/issues/2235

# Local development
```sh
npm i
npm start
```

# Build as local environment
```sh
## build
docker build -t docker-adorable-avatars .
## test in local
docker run -p 8080:8080 docker-adorable-avatars
```

# Running at HeroKu
```sh
heroku container:push web --app my_app_name
heroku container:release web --app my_app_name
# visit
heroku open -a my_app_name
# debug
heroku logs --tail -a my_app_name
```
# Testing
```
# visit http://my_app_name.heroku.app/my_name
```

# Credit
1. https://github.com/aldrio/adorable-avatars

# API usage
See https://github.com/adorableio/avatars-api-middleware#endpoints for usage

# HeroKu
1. https://help.heroku.com/PPBPA231/how-do-i-use-the-port-environment-variable-in-container-based-apps