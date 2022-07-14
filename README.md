# fullcycle-ch1-docker
FullCycle Chapter 1 - Docker

# Challenge 1

Create a golang image on DockerHub that says "Code.education Rocks!" when executed.
This image should have less than 2MB.

The solution can be found on the folder `challenge1` and the image is published on DockerHub in this link: 
https://hub.docker.com/repository/docker/haplehaple/codeeducation/


# Challenge 2

Create a docker compose file with a nodejs exposed through nginx.
The nodejs app should insert some default name into a table "people" and
return the following output when called at the endpoint `GET /`:
```
<h1>Full Cycle Rocks!</h1>

- (... list with all the names selected from table "people")
```

The solution can be found at the folder `challenge2` and tested with `docker compose up -d`.