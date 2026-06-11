#!/bin/bash
# Clean start script — fixes corrupted .next cache errors
set -e
cd "$(dirname "$0")/.."

export NVM_DIR="$HOME/.nvm"
[ -s "$NVM_DIR/nvm.sh" ] && . "$NVM_DIR/nvm.sh"
nvm use 20 2>/dev/null || nvm use

echo "Cleaning .next cache..."
rm -rf .next node_modules/.cache

echo "Starting dev server..."
exec npm run dev
