import Time from "../widgets/Time.js";
import Workspaces from "../widgets/Workspaces.js";
import CONSTANTS from "../utils/constants.js";
import QuickSettingsButton from "../buttons/QuickSettings.js";

/**
 * This is the bar which holds all the status indicators and 
 * some quick system utilites
 * @param {Number} monitor 
 */
const Bar = (monitor = 0) => {
    return Widget.Window({
        monitor : monitor,
        name : `bar_${monitor}`,
        anchor : ['top', 'left', 'right'],
        class_names : ['bar', 'round-border'],
        exclusivity : 'exclusive',
        child : Widget.CenterBox({
            start_widget : Widget.Box({
                children : [
                    Workspaces()
                ]
            }),
            center_widget : Widget.Box({
                children : [
                    Time()
                ]
            }),
            end_widget : Widget.Box({
                hpack : 'end',
                children : [
                    QuickSettingsButton()
                ]
            })
        }),
        margins : [CONSTANTS.MARGIN_THICK, CONSTANTS.MARGIN_THICK, 0 , CONSTANTS.MARGIN_THICK]
    })
}

export default Bar;