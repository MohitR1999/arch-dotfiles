const hyprland = await Service.import('hyprland');
import { isSystemUtilitesMenuVisible } from "./common/variables.js";
import Bar from "./components/Bar.js";
import SystemUtilities from "./components/SystemUtilities.js";

const bars = hyprland.monitors.map(monitor => Bar(monitor.id))

App.config({
    style: './styles/style.css',
    windows: [
        ...bars,
    ],
    onConfigParsed : () => {
        
    },
})