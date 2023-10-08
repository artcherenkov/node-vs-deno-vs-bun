docker build -t bun-test -f Dockerfile.bun .
docker run --rm -e CURRENT_RUNTIME=bun --env-file docker.env bun-test