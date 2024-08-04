# Survey

A simple survey project built using a Laravel 11 backend with MySQL 9.0.1 database.
Frontend is running VueJS 3 with vuex store. All hosted on docker containers with hot reloading on the frontend.

## Build instructions

To get started, change into the api folder start Sail which will start all containers.  

```Bash
    ./vendor/bin/sail up -d
```

### Todo
- [ ] Make alert its own component and style better
- [x] ~~Fix CSRF issues when sending requests to the API from the frontend~~


- [ ] Add makefile or something to run npm commands directly on docker container to avoid rebuilding or manually going into the container.
- [ ] Set up a testing database for Pest in the API
- [ ] Add more details on set up in this file
- [ ] Add laravel packages such as Actions, Spatie Data
- [ ] Set up an API endpoint instead of using direct access to port 8000
- [x] ~~Add tailwind to frontend~~
- [x] ~~Create auth forms to login, register and logout~~
- [ ] Create auth system with sanctum
- [ ] Create forgot password function on login page
- [ ] Create survey pages
- [ ] Add questions
- [ ] Create a dashboard style page
- [ ] Update frontend docker to be able to run in production using nginx
- [ ] Make a new colour scheme for vuetify
- [ ] Create logo