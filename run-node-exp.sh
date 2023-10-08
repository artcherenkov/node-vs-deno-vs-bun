docker build -t node-test -f Dockerfile.node .
docker run --rm -e CURRENT_RUNTIME=node --env-file docker.env node-test