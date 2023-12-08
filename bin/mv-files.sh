#!/bin/bash

mvToPub () {
  NODE_ROOT=$(npm root)
  cd $NODE_ROOT/..
  # cp dist/javascripts/index.js $NODE_ROOT/../public/javascripts
  # cp dist/index.js $NODE_ROOT/../public/javascripts
  # cp dist/javascripts/*.js $NODE_ROOT/../public/javascripts
  cp dist/*.js $NODE_ROOT/../public/javascripts
  # mv dist/* $NODE_ROOT/..
  # mv dist/front.js $NODE_ROOT/../public/javascripts
  # mv dist/lib/routes.js $NODE_ROOT/../lib
  # mv dist/lib/pieces.js $NODE_ROOT/../public/javascripts
  # mv dist/lib/game.js $NODE_ROOT/../public/javascripts
  # mv dist/lib/handlers.js $NODE_ROOT/../public/javascripts
  # mv dist/lib/view.js $NODE_ROOT/../public/javascripts
  # mv dist/app.js $NODE_ROOT/..
  echo "Success!"
} 

mvToPub
