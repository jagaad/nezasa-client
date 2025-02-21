# @jagaad/nezasa-client

1. Download `npm run download`
2. Apply OpenAPI patches `npm run openapi-patches`
3. Generate `npm run generate`
4. Commit & Push
5. Build `npm run build`
6. Publish `npm run release`

## How to Create a Patch for a OpenAPI File

```bash
git diff openapi/planner-api-v1.yaml > openapi-patches/planner-api-v1.yaml.patch
```
