#!/bin/bash

npx swagger-typescript-api \
    -p $1 \
    --modular true \
    --no-client \
    --extract-enums true \
    --module-name-first-tag true \
    -o ./ \
    -n $2