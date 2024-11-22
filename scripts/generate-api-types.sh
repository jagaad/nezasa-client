#!/bin/bash

./scripts/generate-types.sh openapi/checkout-api-v1.yaml types/checkout-api-v1.ts
./scripts/generate-types.sh openapi/planner-api-v1.yaml types/planner-api-v1.ts