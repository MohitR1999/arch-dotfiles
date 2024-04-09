import PROPERTIES from "../constants/properties.js";

function ScreenShot() {
    return Widget.Button({
        class_names : ['text-dark', 'utilites-button'],
        onClicked : () => {
            console.log('Screenshot button triggered...')
        },
        child : Widget.Icon({
            icon : `${PROPERTIES.USER_HOME}/.config/ags/assets/screenshot.svg`
        })
    })
}

function Logout() {
    return Widget.Button({
        class_names : ['text-dark', 'utilites-button'],
        onClicked : () => {
            console.log('Logout button triggered...')
        },
        child : Widget.Icon({
            icon : `${PROPERTIES.USER_HOME}/.config/ags/assets/logout.svg`
        })
    })
}

function Lock() {
    return Widget.Button({
        class_names : ['text-dark', 'utilites-button'],
        onClicked : () => {
            console.log('Lock button triggered...')
        },
        child : Widget.Icon({
            icon : `${PROPERTIES.USER_HOME}/.config/ags/assets/lock.svg`
        })
    })
}

function Reboot() {
    return Widget.Button({
        class_names : ['text-dark', 'utilites-button'],
        onClicked : () => {
            console.log('Reboot button triggered...')
        },
        child : Widget.Icon({
            icon : `${PROPERTIES.USER_HOME}/.config/ags/assets/restart.svg`
        })
    })
}

function Shutdown() {
    return Widget.Button({
        class_names : ['text-dark', 'utilites-button'],
        onClicked : () => {
            console.log('Shutdown button triggered...')
        },
        child : Widget.Icon({
            icon : `${PROPERTIES.USER_HOME}/.config/ags/assets/power.svg`
        })
    })
}


function QuickUtilities() {
    return Widget.Box({
        spacing : 15,
        margin_top : 15,
        margin_left : 15,
        margin_right : 15,
        margin_bottom : 15,
        class_names : ['row'],
        children : [
            ScreenShot(),
            Logout(),
            Lock(),
            Reboot(),
            Shutdown()
        ]
    })
}

export default QuickUtilities;