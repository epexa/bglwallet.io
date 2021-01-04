#!/bin/bash

DIST_FOLDER=docs

npm test &&

mkdir -p $DIST_FOLDER &&

cp -r public/* $DIST_FOLDER/ &&

babel \
src/app.js \
-o $DIST_FOLDER/app.js &&

uglifyjs \
src/lib/typed.min.js \
src/lib/popper.min.js \
$DIST_FOLDER/app.js \
-c drop_console=true,toplevel=true -m toplevel=true -o $DIST_FOLDER/app.js &&

html-minifier --collapse-whitespace --remove-comments \
src/index.html \
-o $DIST_FOLDER/index.html &&

cleancss \
src/style.css \
-o $DIST_FOLDER/style.css
