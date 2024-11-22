#!/bin/bash

./scripts/generate-types.sh openapi/checkout-api-v1.yaml types/checkout-api-v1.ts
./scripts/generate-types.sh openapi/itinerary-api-v1.yaml types/itinerary-api-v1.ts
./scripts/generate-types.sh openapi/location-api-v1.yaml types/location-api-v1.ts
./scripts/generate-types.sh openapi/payment-transaction-api.yaml types/payment-transaction-api.ts
./scripts/generate-types.sh openapi/planner-api-v1.yaml types/planner-api-v1.ts
./scripts/generate-types.sh openapi/template-api-v1.yaml types/template-api-v1.ts
./scripts/generate-types.sh openapi/webhook-api-v1.yaml types/webhook-api-v1.ts
