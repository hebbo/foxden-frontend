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

echo "$magenta==== jest tests $reset"
yarn jest

echo "$yellow==== flow type checks $reset"
flow

echo "$magenta==== flow coverage $reset"
flow coverage --pretty src/index.js

echo "$cyan==== linting $reset"
yarn eslint src/*.js

echo "$blue==== code formatter $reset"
prettier --write src/index.js
prettier --write src/index.test.js

echo -e "\n\n$green 😎 Successful!! $reset"

