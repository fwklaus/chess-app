#!/bin/bash

mvToPub () {
  NODE_ROOT=$(npm root)
  cd $NODE_ROOT/..
  mv dist/front.js $NODE_ROOT/../public/javascripts
  mv dist/lib/routes.js $NODE_ROOT/../lib
  mv dist/lib/pieces.js $NODE_ROOT/../public/javascripts
  mv dist/lib/game.js $NODE_ROOT/../public/javascripts
  mv dist/app.js $NODE_ROOT/..
  echo "Success!"
} 

mvToPub
