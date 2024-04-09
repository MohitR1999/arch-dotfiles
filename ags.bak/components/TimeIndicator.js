const time = Variable('', {
    poll : [1000, 'date "+%r"'],
})

const date = Variable('', {
    poll : [1000, 'date "+%d %b %Y"'],
})

function Indicator(prop) {
    return Widget.EventBox({
        class_names : ['background-dark', 'text-dark', 'round-border'],
        child : Widget.Label({
            width_request : 125,
            label : prop.bind('value')
        })
    })
}

function TimeIndicator() {    
    return Widget.Box({
        class_names : ['round-border'],
        sensitive : true,
        spacing : 10,
        hpack : 'start',
        children : [
            Indicator(date),
            Indicator(time),
        ]
    });
}

export default TimeIndicator;