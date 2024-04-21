FROM node:20-alpine
USER root

# Install dependencies
RUN apk update

RUN apk add --no-cache openjdk17

WORKDIR /home/node/musicboat

# copy source
COPY ./commands ./commands
COPY ./events ./events
COPY ./Structures ./Structures
COPY ./utils ./utils
COPY ./index.ts ./index.ts
COPY ./client.ts ./client.ts
COPY ./updateLavaLink.ts ./updateLavaLink.ts
COPY ./package.json ./package.json
COPY ./tsconfig.json ./tsconfig.json
COPY ./config.json ./config.json
COPY ./application.yml ./application.yml
COPY ./Lavalink.jar ./Lavalink.jar

# install dependenciesw
RUN npm install

CMD ["npm", "run", "start"];