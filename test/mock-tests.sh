#!/bin/bash

NODE=`which node`

if [ -z "$NODE" ]; then
  echo 'This script requires NodeJS to be installed on your system globally to work'
fi

#TODO may need to capture the cwd and then do an npm install...

#start node server
node hellosign-sdk-test-server &
NODE_PID=$!

#run tests
../node_modules/mocha/bin/mocha ./mock-functional/

#kill node server
kill $NODE_PID
