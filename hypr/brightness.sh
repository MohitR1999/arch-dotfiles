#!/bin/bash

id="11624015"

get_brightness() {
    brightness=$(brightnessctl get)
    echo $brightness
}

main() {
    brightness=$(get_brightness)

    if [ -n "$brightness" ]; then
        brightness_percentage=$(printf "%.0f" $(echo "($brightness * 100)/255" | bc))
        dunstify "Brightness" -h  int:value:${brightness_percentage} -r $id -i /usr/share/icons/Papirus-Dark/symbolic/status/display-brightness-medium-symbolic.svg
    else
        echo "Failed to fetch screen brightness."
    fi
}

main
