import CONSTANTS from "../utils/constants.js";


const PopupWindow = (name, child, anchor) => {
    return Widget.Window({
        name : name,
        anchor : anchor,
        exclusivity : "normal",
        visible : false,
        keymode : 'exclusive',
        margins : [CONSTANTS.MARGIN_THICK, CONSTANTS.MARGIN_THICK, 0 , CONSTANTS.MARGIN_THICK],
        setup : self => {
            self.hook(App, (_, windowName, visible) => {
                if (windowName == name) {
                    self.visible = visible;
                }
            })
            self.keybind('Escape', () => App.closeWindow(name))
        },
        child : child,
    });    
}

export default PopupWindow;