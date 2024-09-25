#!/bin/bash

command=$1

case $command in
  "build")
    sudo docker-compose up -d --no-deps --build musicboat
    if [ $? -eq 0 ]; then
      sudo docker-compose logs -f musicboat
    fi
    ;;
  "logs")
    sudo docker-compose logs -f musicboat
    ;;
  "kill")
    sudo docker-compose down
    ;;
  *)
    echo "Invalid command. Please use 'build' or 'logs'."
    ;;
esac