import PROPERTIES from "../constants/properties.js";
const battery = await Service.import('battery');

function BatteryIndicator() {
    const percent = battery.bind('percent').as(p => `${p}%`);
    
    const batteryIcon = Widget.Icon({
        icon : battery.bind('icon_name'),
        width_request : PROPERTIES.WIDTH
    });
    const batteryLabel = Widget.Label({
        label : percent,
        width_request : PROPERTIES.WIDTH - 10
    })

    return Widget.Box({
        class_names : ['round-border', 'text-dark', 'background-dark'],
        spacing : 2,
        hpack : 'end',
        width_request : PROPERTIES.WIDTH * 2 + 10,
        children : [
            batteryIcon,
            batteryLabel,
        ]
    })
}

export default BatteryIndicator;