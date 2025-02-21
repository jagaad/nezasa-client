#!/bin/bash

source .env

if [[ -z "$NEZASA_API_USERNAME" ]]; then
    echo "Must provide NEZASA_API_USERNAME in environment" 1>&2
    exit 1
fi

if [[ -z "$NEZASA_API_PASSWORD" ]]; then
    echo "Must provide NEZASA_API_PASSWORD in environment" 1>&2
    exit 1
fi

# https://support.nezasa.com/hc/en-gb/articles/4404082945809-Itinerary-API
curl https://docs.tripbuilder.app/Mo9reezaehiengah/itinerary-api-v1.yaml -o openapi/itinerary-api-v1.yaml

# https://support.nezasa.com/hc/en-gb/articles/4404075693969-Planner-API
curl https://docs.tripbuilder.app/Mo9reezaehiengah/planner-api-v1.yaml -o openapi/planner-api-v1.yaml

# https://support.nezasa.com/hc/en-gb/articles/4404076108177-Location-API
curl https://docs.tripbuilder.app/Mo9reezaehiengah/location-api-v1.yaml -o openapi/location-api-v1.yaml

# https://support.nezasa.com/hc/en-gb/articles/4408920977553-Booking-API-Webhooks
# https://support.nezasa.com/hc/en-gb/articles/18141708147089-Webhook-for-booking-modifications
curl https://docs.tripbuilder.app/Mo9reezaehiengah/webhook-api-v1.yaml -o openapi/webhook-api-v1.yaml
curl https://docs.tripbuilder.app/Mo9reezaehiengah/webhook-api-models-v1.yaml -o openapi/webhook-api-models-v1.yaml

# https://weebora.stg.tripbuilder.app/inventory/api/agency/
curl -u $NEZASA_API_USERNAME:$NEZASA_API_PASSWORD https://weebora.stg.tripbuilder.app/inventory/api/agency/docs.yaml -o openapi/agency-api.yaml

# https://weebora.stg.tripbuilder.app/inventory/api/supplier/
curl -u $NEZASA_API_USERNAME:$NEZASA_API_PASSWORD https://weebora.stg.tripbuilder.app/inventory/api/supplier/docs.yaml -o openapi/inventory-supplier-api.yaml

# https://weebora.stg.tripbuilder.app/inventory/api/picture/
curl -u $NEZASA_API_USERNAME:$NEZASA_API_PASSWORD https://weebora.stg.tripbuilder.app/inventory/api/picture/docs.yaml -o openapi/inventory-picture-api.yaml

# https://support.nezasa.com/hc/en-gb/articles/29588280597265-Checkout-API
curl https://docs.tripbuilder.app/Mo9reezaehiengah/checkout-api-v1.yaml -o openapi/checkout-api-v1.yaml

# https://support.nezasa.com/hc/en-gb/articles/20496375532177-Payment-API
curl https://docs.tripbuilder.app/Mo9reezaehiengah/payment-transaction-api.yaml -o openapi/payment-transaction-api.yaml

# https://support.nezasa.com/hc/en-gb/articles/23104208261777-Template-API
curl https://docs.tripbuilder.app/Mo9reezaehiengah/template-api-v1.yaml -o openapi/template-api-v1.yaml

printf "\nManual download\n"
echo https://support.nezasa.com/hc/en-gb/articles/28315401569297-Connect-API-Accommodations
echo https://support.nezasa.com/hc/en-gb/articles/28414297178001-Connect-API-Activities
echo https://support.nezasa.com/hc/en-gb/articles/28415398291601-Connect-API-Transports
