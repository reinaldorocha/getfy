#!/usr/bin/env sh
set -eu

image="getfy-nginx-mjs-mime-test"

cleanup() {
    docker image rm -f "$image" >/dev/null 2>&1 || true
}

trap cleanup EXIT INT TERM

docker build --quiet --target app --tag "$image" .

headers="$(docker run --rm --entrypoint sh "$image" -lc 'nginx && curl -sSI http://127.0.0.1/build/getfy-plugin-vue.mjs')"
printf '%s\n' "$headers"
printf '%s\n' "$headers" | grep -Eiq '^Content-Type: application/javascript([;[:space:]]|$)'
