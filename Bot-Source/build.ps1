param (
    [Parameter(Mandatory=$true)]
    [string]$command
)

switch ($command) {
    "build" {
        docker-compose up -d --no-deps --build musicboat
        if ($?) {
            docker-compose logs -f musicboat
        }
    }
    "logs" {
        docker-compose logs -f musicboat
    }
    "kill" {
        docker-compose down
    }
    default {
        Write-Output "Invalid command. Please use 'build', 'kill' or 'logs'."
    }
}