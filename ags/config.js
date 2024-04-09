import Bar from './src/components/Bar.js';
import QuickSettings from './src/components/QuickSettings.js';
const hyprland = await Service.import("hyprland");

const bars = hyprland.monitors.map(monitor => Bar(monitor.id));

App.config({
    style : './src/utils/styles.css',
    windows : [
        ...bars,
    ],
    onConfigParsed : () => {
        App.addWindow(QuickSettings());
    }
})