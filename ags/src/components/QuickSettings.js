import CONSTANTS from "../utils/constants.js";
import PopupWindow from "../common/PopupWindow.js";

const QuickSettings = () => {
    const Box = Widget.Box({
        children : [
            Widget.Label({
                label : 'hello world'
            })
        ]
    });

    return PopupWindow(CONSTANTS.QUICK_SETTINGS, Box, ['top', 'right']);
}

export default QuickSettings;