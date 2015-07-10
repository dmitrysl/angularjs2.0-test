prepare project:
npm install -g tsd
tsd install angular2
npm install -g typescript@^1.5.0-beta

install server
npm install -g http-server

compile tpyescript into javascript
tsc -m commonjs -t es5 --emitDecoratorMetadata app.ts

run server http-server
http-server
or
$HOME/opt/lib/node_modules/http-server/bin/http-server