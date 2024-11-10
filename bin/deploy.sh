#!/usr/bin/env bash

set -e

npm run check
npm version patch
make build
npm publish --access public
echo Package published. Please commit.
