# just makes seeing the implementation easier because installed from npm does not contain the ts files, just .d.ts which are kinda useless

mkdir temp
cd temp

git clone https://github.com/lavaclient/lavaclient.git

cd lavaclient\packages\node\src

# so far all i need so yea
mv * ../../../../../node_modules/lavaclient/dist

cd ../../../../../

mv ./temp/lavaclient/packages/client/ws/src/* ./node_modules/lavalink-ws-client/dist

rm -Recurse -Force temp