#!/bin/bash

mvToPub () {
  NODE_ROOT=$(npm root)
  cd $NODE_ROOT/..
  mv dist/front.js $NODE_ROOT/../public/javascripts
  echo "Success!"
} 

mvToPub
