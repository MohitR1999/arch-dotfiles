const hyprland = await Service.import('hyprland');

const Workspaces = () => {
    
    return Widget.Box({
        class_names : ['workspace-parent', 'round-border'],
        children : hyprland.bind('workspaces').as(workspace => workspace.map(({id}) => {
            return Widget.Button({
                attribute : id,
                onPrimaryClick : () => {
                    hyprland.messageAsync(`dispatch workspace ${id}`)
                },
                class_names : ['workspace-button', 'round-border', 'font-light'],
                child : Widget.Box({
                    hpack : 'center',
                    children : [
                        Widget.Label(`${id}`)
                    ]
                }),
            })
        })),
        setup : (self) => {
            self.hook(hyprland, () => {
                self.children.forEach(btn => {
                    btn.toggleClassName('active-workspace', hyprland.active.workspace.id === btn.attribute);
                })
            })
        }
    })
}

export default Workspaces;