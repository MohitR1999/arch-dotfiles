/**
 * 
 * @param {String} name 
 * @returns 
 */
export const Padding = (name) => {
    return Widget.EventBox({
        hexpand : true,
        vexpand : true,
        can_focus : false,
        child : Widget.Box({}),
        setup : (w) => {
            w.on("button-press-event", () => {
                App.toggleWindow(name)
            })
        }
    })
}

const PopupRevealer = (name, child, transition) => {
    return Widget.Box({
        child : Widget.Revealer({
            transition : transition ? transition : "slide_down",
            child : Widget.Box({
                child : child
            }),
            setup : (self) => {
                self.hook(App, (_, wname, visible) => {
                    if (wname == name) {
                        self.reveal_child = visible;
                    }
                })
            }
        })
    })
}