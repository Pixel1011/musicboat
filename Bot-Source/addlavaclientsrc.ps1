# just makes seeing the implementation easier because installed from npm does not contain the ts files, just .d.ts which are kinda useless

mkdir temp
cd temp

git clone https://github.com/lavaclient/lavaclient.git

cd lavaclient\packages\node\src

# so far all i need so yea
mv * ../../../../../node_modules/lavaclient/dist

cd ../../../../../

mv ./temp/lavaclient/packages/client/ws/src/* ./node_modules/lavalink-ws-client/dist
mv ./temp/lavaclient/packages/client/api/src/api/* ./node_modules/lavalink-api-client/dist/api
mv ./temp/lavaclient/packages/client/api/src/endpoint/* ./node_modules/lavalink-api-client/dist/endpoint
mv ./temp/lavaclient/packages/protocol/src/* ./node_modules/lavalink-protocol/dist


rm -Recurse -Force temp