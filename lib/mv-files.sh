#!/bin/bash

mvToPub () {
  NODE_ROOT=$(npm root)
  cd $NODE_ROOT/..
  mv dist/front.js $NODE_ROOT/../public/javascripts
  mv dist/lib/routes.js $NODE_ROOT/../lib
  mv dist/lib/bishop.js $NODE_ROOT/../public/javascripts 
  mv dist/lib/king.js $NODE_ROOT/../public/javascripts
  mv dist/lib/knight.js $NODE_ROOT/../public/javascripts
  mv dist/lib/pawn.js $NODE_ROOT/../public/javascripts
  mv dist/lib/queen.js $NODE_ROOT/../public/javascripts
  mv dist/lib/rook.js $NODE_ROOT/../public/javascripts
  mv dist/app.js $NODE_ROOT/..
  echo "Success!"
} 

mvToPub
