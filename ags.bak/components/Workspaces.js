import PROPERTIES from "../constants/properties.js";

const hyprland = await Service.import('hyprland');

function Workspaces() {
    const workspaces = hyprland.bind('workspaces');
    const activeWorkspaceId = hyprland.active.workspace.bind('id');
    return Widget.Box({
        class_names: ['background-dark', 'round-border'],
        spacing : 5,
        children: workspaces.as(ws => ws.map(({ id }) => Widget.EventBox({
            onPrimaryClick: () => hyprland.messageAsync(`dispatch workspace ${id}`),
            width_request : PROPERTIES.WIDTH,
            child: Widget.Label({
                label : `${id}`,
            }),
            class_names: activeWorkspaceId.as(i => i === id ? ['focused-btn', 'round-border', 'text-light'] : ['unfocused-btn', 'round-border', 'text-dark']),
        }))),
    });
}

export default Workspaces;