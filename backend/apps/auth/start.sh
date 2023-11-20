#!/bin/bash

TYPEORM="npm run typeorm:auth"

migration_run="$TYPEORM migration:run"
migration_generate="$TYPEORM migration:generate apps/auth/src/utils/migrations/migration"

echo "Run/verifying migrations..."
omit=$(npm run build auth)
output_run=$($migration_run)
if [[ "$output_run" == *"No migrations are pending"* ]]; then
    echo "No migrations are pending - Verifying if the database is up to date..."
fi
output_generate=$($migration_generate)
if [[ "$output_generate" == *"No changes in database schema were found"* ]]; then
    echo "No changes in database schema were found - No need generate a migration. Skipping..."
else
    echo "Generate and Running migrations..."
    omit=$(npm run build auth)
    $migration_run
fi
npm run start:dev auth