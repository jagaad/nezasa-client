#!/bin/bash

printf "\nApplying patches\n"
for patch in openapi-patches/*.patch; do
    git apply $patch
done
