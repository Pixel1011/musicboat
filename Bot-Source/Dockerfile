FROM node:24-alpine
USER root

# Install dependencies
RUN apk update

RUN apk add --no-cache openjdk17

RUN npm install -g pnpm
USER node

WORKDIR /home/node/musicboat

# install dependencies
COPY ./package.json ./package.json
USER root
RUN chown node:node ./package.json
USER node
RUN pnpm install

# copy source
COPY ./Structures ./Structures
COPY ./utils ./utils
COPY ./plugins ./plugins
COPY ./index.ts ./index.ts
COPY ./client.ts ./client.ts
COPY ./updateLavaLink.ts ./updateLavaLink.ts
COPY ./tsconfig.json ./tsconfig.json
COPY ./config.json ./config.json
COPY ./application.yml ./application.yml
COPY ./Lavalink.jar ./Lavalink.jar
COPY ./events ./events
COPY ./commands ./commands

USER root
RUN find /home/node/musicboat ! -path "/home/node/musicboat/node_modules*" -exec chown node:node {} +

USER node


CMD pnpm run start