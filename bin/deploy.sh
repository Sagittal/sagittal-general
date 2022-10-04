#!/usr/bin/env bash

set -e

npm version patch
make build
npm publish --access public
echo Package published. Please commit.
