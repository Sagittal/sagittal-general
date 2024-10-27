#!/usr/bin/env bash

set -e

npm run test-full
npm version patch
make build
npm publish --access public
echo Package published. Please commit.
