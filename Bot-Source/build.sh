#!/bin/bash

command=$1

case $command in
  "build")
    docker compose up -d --no-deps --build musicboat
    if [ $? -eq 0 ]; then
      docker compose logs -f musicboat
    fi
    ;;
  "logs")
    docker compose logs -f musicboat
    ;;
  "kill")
    docker compose down
    ;;
  "copy")
    docker cp ./commands musicboat:/home/node/musicboat/commands
    ;;
  *)
    echo "Invalid command. Please use 'build' or 'logs'."
    ;;
esac