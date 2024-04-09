const time = Variable('', {
    poll : [1000, 'date "+%r"'],
})

const date = Variable('', {
    poll : [1000, 'date "+%d %b %Y"'],
})

const Indicator = prop => {
    return Widget.Label({
        label : prop.bind('value')
    })
}

const Time = () => {
    return Widget.Button({
        class_names : ['round-border', 'font-light'],
        width_request : 250,
        child : Widget.Box({
            hpack : 'center',
            spacing : 10,
            children : [
                Indicator(date),
                Indicator(time),
            ]
        })
    })
}

export default Time;