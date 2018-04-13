#!/bin/bash
set -eo pipefail

red=`tput setaf 1`
green=`tput setaf 2`
yellow=`tput setaf 3`
blue=`tput setaf 4`
magenta=`tput setaf 5`
cyan=`tput setaf 6`
white=`tput setaf 7`
reset=`tput sgr0`

# echo "$magenta==== using node v8.11.1 $reset"
# nvm use v8.11.1

echo "$magenta==== jest tests $reset"
yarn jest

echo "$yellow==== flow type checks $reset"
./node_modules/.bin/flow

echo "$magenta==== flow coverage $reset"
./node_modules/.bin/flow coverage --pretty src/index.js
./node_modules/.bin/flow coverage --pretty src/index.test.js
./node_modules/.bin/flow coverage --pretty src/foxden/foxden.js


echo "$cyan==== linting $reset"
./node_modules/.bin/eslint src/*.js

echo "$blue==== code formatter $reset"
./node_modules/.bin/prettier --write src/index.js
./node_modules/.bin/prettier --write src/index.test.js
./node_modules/.bin/prettier --write src/foxden/foxden.js

echo -e "\n\n$green 😎 Successful!! $reset"

