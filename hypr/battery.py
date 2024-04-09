#!/usr/bin/env python3
import subprocess
import time
import gi
gi.require_version("Notify", "0.7")
from gi.repository import Notify

# Set the battery threshold (in percentage)
threshold = 25

def send_notification(message):
    Notify.init("Battery Monitor")
    notification = Notify.Notification.new("Battery Low", message)
    notification.show()

while True:
    # Get the current battery level
    battery_info = subprocess.check_output(["acpi", "-b"]).decode("utf-8")
    discharging = False
    if (battery_info.find("Discharging") >= 0):
        discharging = True
    battery_level = int(battery_info.split(", ")[1].split("%")[0])

    # Check if the battery level is below the threshold and is discharging
    if (battery_level < threshold) and discharging == True:
        # Send a notification
        send_notification(f"Battery level is {battery_level}%")

    # Sleep for 1 minute before checking again
    time.sleep(60)
