# Dev environment
Setup your dev environment:
```
docker compose up
```

Enter in the container:
```
docker exec -it go-app bash
```

# Build the image

```
docker build -t haplehaple/codeeducation -f Dockerfile.prod .
```

# Run the app

```
docker run --rm haplehaple/codeeducation
```
