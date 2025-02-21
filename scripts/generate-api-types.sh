#!/bin/bash

./scripts/generate-types.sh openapi/agency-api.yaml src/api/agency-api.ts
./scripts/generate-types.sh openapi/checkout-api-v1.yaml src/api/checkout-api-v1.ts
./scripts/generate-types.sh openapi/connect-accommodations-api.json src/api/connect-accommodations-api.ts
./scripts/generate-types.sh openapi/connect-activities-api.json src/api/connect-activities-api.ts
./scripts/generate-types.sh openapi/connect-transports-api.json src/api/connect-transports-api.ts
./scripts/generate-types.sh openapi/inventory-picture-api.yaml src/api/inventory-picture-api.ts
./scripts/generate-types.sh openapi/inventory-supplier-api.yaml src/api/inventory-supplier-api.ts
./scripts/generate-types.sh openapi/itinerary-api-v1.yaml src/api/itinerary-api-v1.ts
./scripts/generate-types.sh openapi/location-api-v1.yaml src/api/location-api-v1.ts
./scripts/generate-types.sh openapi/payment-transaction-api.yaml src/api/payment-transaction-api.ts
./scripts/generate-types.sh openapi/planner-api-v1.yaml src/api/planner-api-v1.ts
./scripts/generate-types.sh openapi/template-api-v1.yaml src/api/template-api-v1.ts
./scripts/generate-types.sh openapi/webhook-api-models-v1.yaml src/api/webhook-api-models-v1.ts
./scripts/generate-types.sh openapi/webhook-api-v1.yaml src/api/webhook-api-v1.ts
