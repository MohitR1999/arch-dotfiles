import CONSTANTS from "../utils/constants.js";

const QuickSettingsButton = () => {
    return Widget.Button({
        class_names : ['round-border'],
        child : Widget.Box({
            children : [
                Widget.Icon({
                    icon : 'open-menu'
                })
            ]
        }),

        on_clicked : () => {
            App.toggleWindow(CONSTANTS.QUICK_SETTINGS);
        },
    })
}

export default QuickSettingsButton;