docker build -t deno-test -f Dockerfile.deno .
docker run --rm -e CURRENT_RUNTIME=deno --env-file docker.env deno-test