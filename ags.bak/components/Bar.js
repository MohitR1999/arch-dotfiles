import PROPERTIES from "../constants/properties.js";
import Workspaces from "./Workspaces.js";
import BatteryIndicator from "./BatteryIndicator.js";
import TimeIndicator from "./TimeIndicator.js"
import VolumeIndicator from "./Volume.js";
import NetworkIndicator from "./Network.js";
import SystemUtilitiesLauncher from "./SystemUtilitiesLauncher.js";
import SysTray from "./AppLauncher.js";

const LeftWidgets = () => {
    return Widget.Box({
        spacing : 5,
        children : [
            Workspaces(),
        ]
    })
}

const RightWidgets = () => {
    return Widget.Box({
        hpack: 'end',
        spacing : 10,
        children : [
            SysTray(),
            NetworkIndicator(),
            VolumeIndicator(),
            BatteryIndicator(),
            TimeIndicator(),
            SystemUtilitiesLauncher(),
        ]
    })
}

const CenterWidgets = () => {
    return Widget.Box({
        children : [
        ]
    });
}


function Bar(monitor = 0) {
    return Widget.Window({
        monitor : monitor,
        class_name : 'bar',
        name : `bar-mon-${monitor}`,
        anchor : ['top', 'left', 'right'],
        exclusivity: 'exclusive',
        child : Widget.CenterBox({
            start_widget : LeftWidgets(),
            center_widget : CenterWidgets(),
            end_widget : RightWidgets(),
        }),
        margins : [PROPERTIES.MARGIN, PROPERTIES.MARGIN, 0, PROPERTIES.MARGIN],
    })
}

export default Bar;