#!/bin/bash

./scripts/generate-types.sh openapi/agency-api.yaml types/api/agency-api.ts
./scripts/generate-types.sh openapi/checkout-api-v1.yaml types/api/checkout-api-v1.ts
./scripts/generate-types.sh openapi/connect-accommodations-api.json types/api/connect-accommodations-api.ts
./scripts/generate-types.sh openapi/connect-activities-api.json types/api/connect-activities-api.ts
./scripts/generate-types.sh openapi/connect-transports-api.json types/api/connect-transports-api.ts
./scripts/generate-types.sh openapi/inventory-picture-api.yaml types/api/inventory-picture-api.ts
./scripts/generate-types.sh openapi/inventory-supplier-api.yaml types/api/inventory-supplier-api.ts
./scripts/generate-types.sh openapi/itinerary-api-v1.yaml types/api/itinerary-api-v1.ts
./scripts/generate-types.sh openapi/location-api-v1.yaml types/api/location-api-v1.ts
./scripts/generate-types.sh openapi/payment-transaction-api.yaml types/api/payment-transaction-api.ts
./scripts/generate-types.sh openapi/planner-api-v1.yaml types/api/planner-api-v1.ts
./scripts/generate-types.sh openapi/template-api-v1.yaml types/api/template-api-v1.ts
./scripts/generate-types.sh openapi/webhook-api-models-v1.yaml types/api/webhook-api-models-v1.ts
./scripts/generate-types.sh openapi/webhook-api-v1.yaml types/api/webhook-api-v1.ts
