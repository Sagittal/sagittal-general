set -e

npm version patch
npm run build
npm publish --access public
echo Package published. Please commit.
