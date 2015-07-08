#!/bin/bash

echo "Starting up..."

echo "Checking for mocha..."
MOCHA="../node_modules/mocha/"
if [[ -e "$MOCHA" ]]; then
  #statements
  echo "No mocha! Checking for NPM"
  NPM=`which npm`
  if [[ -z "$NPM" ]]; then
    #statements
    echo "Cannot run without NPM. Please install."
    exit
  fi

  echo "NPM found. Installing dependencies"
  npm install --dev

fi


echo "Running unit tests"

../node_modules/mocha/bin/mocha ./unit

echo "Running mock functional tests"

./mock-tests.sh

echo "Done!"
