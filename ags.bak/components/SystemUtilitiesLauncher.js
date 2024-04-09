import { isSystemUtilitesMenuVisible } from '../common/variables.js';
import SystemUtilities from './SystemUtilities.js';

function SystemUtilitiesLauncher() {
    
    return Widget.Button({
        onClicked : (ev) => {
            isSystemUtilitesMenuVisible.setValue(!isSystemUtilitesMenuVisible.getValue());
            if (isSystemUtilitesMenuVisible.getValue()) {
                App.addWindow(SystemUtilities())
            } else {
                App.removeWindow('sys-utilites')
            }
        },
        
        child : Widget.Box({
            children : [
                Widget.Icon({
                    icon : `open-menu-symbolic`
                })
            ]
        })
    });
}

export default SystemUtilitiesLauncher;