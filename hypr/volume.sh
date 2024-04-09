#!/bin/bash

id="11624015"

get_volume() {
    volume=$(awk -F"[][]" '/Left:/ { print $2 }' <(amixer sget Master) | tr -d "%")
    echo $volume
}

main() {
    volume=$(get_volume)

    if [ -n "$volume" ]; then
        dunstify "Volume" -h int:value:${volume} -r $id -a "Volume" -i /usr/share/icons/Papirus-Dark/symbolic/status/audio-volume-medium-symbolic.svg
    else
        echo "Failed to fetch volume."
    fi
}

main
