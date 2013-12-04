#!/bin/sh
set -x
mkdir -p build
rm -f build/aftercaster-app.zip
cd app
zip -r ../build/aftercaster-app.zip * -x "*.DS_Store" -x "*.gitkeep"
cd ..
bees app:deploy --appid iui/aftercaster -t node -RPLUGIN.SRC.node=https://s3.amazonaws.com/clickstacks/admin/nodejs-plugin-0.8.21.zip build/aftercaster-app.zip

