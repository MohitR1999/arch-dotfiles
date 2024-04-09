const network = await Service.import('network')

function WifiIndicator() {
    return Widget.Button({
        class_names: ['background-dark', 'text-dark', 'round-border'],
        child: Widget.Box({
            hexpand: true,
            spacing: 5,
            children: [
                Widget.Icon({
                    icon: network.wifi.bind('icon_name'),
                }),
                Widget.Label({
                    label: network.wifi.bind('ssid')
                        .as(ssid => ssid || 'Unknown'),
                }),
            ],
        })
    })
}

const NetworkIndicator = () => Widget.Box({
    spacing: 10,
    children: [
        WifiIndicator(),
    ],
})

export default NetworkIndicator;