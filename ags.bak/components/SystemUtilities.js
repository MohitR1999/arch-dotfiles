import QuickUtilities from "../widgets/QuickUtilities.js";
import Players from "../widgets/Player.js";
import PROPERTIES from "../constants/properties.js";
import { isSystemUtilitesMenuVisible } from "../common/variables.js";

function SystemUtilities() {
    
    return Widget.Window({
        name : 'sys-utilites',
        anchor : ['top', 'right'],
        class_names : ['background-dark', 'round-border', 'text-dark'],
        margins : [PROPERTIES.MARGIN, PROPERTIES.MARGIN, 0, PROPERTIES.MARGIN],
        keymode : "exclusive",
        child : Widget.Box({
            orientation : 1,
            children : [
                QuickUtilities(),
                Players()
            ]
        }),
        setup : (self) => self.keybind("Escape", () => {
            if (isSystemUtilitesMenuVisible.getValue()) {
                isSystemUtilitesMenuVisible.setValue(!isSystemUtilitesMenuVisible.getValue());
                App.removeWindow('sys-utilites');
            }
        })
    });
}

export default SystemUtilities;