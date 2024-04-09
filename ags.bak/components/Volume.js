import PROPERTIES from "../constants/properties.js";
const audio = await Service.import('audio')
// Got the streams
const speakerStream = audio.speaker;
const microphoneStream = audio.microphone;

function Speaker() {
    const speakerBox = Widget.Box({
        spacing : 10,
        children : [
            Widget.Icon().hook(speakerStream, (self) => {
                const vol = speakerStream.volume * 100;
                let icon = 'medium';
                if (vol >= 101) {
                    icon = 'overamplified';
                } else if (vol >= 67) {
                    icon = 'high';
                } else if (vol >= 34) {
                    icon = 'medium';
                } else if (vol >= 1) {
                    icon = 'low';
                } else if (vol >= 0) {
                    icon = 'muted'
                }
                
                self.icon = `audio-volume-${icon}-symbolic`;
            }),
            Widget.Label({
                label : speakerStream.bind('volume').as(vol => {
                    return `${Math.floor(vol * 100)}%`;
                })
            })
        ]
    })

    
    const speakerButton = Widget.Button({
        child : speakerBox,
        class_names : ['volume', 'volume-orange'],
        'on-scroll-up' : (ev) => {
            speakerStream.volume = speakerStream.volume + 0.01;
        },

        'on-scroll-down' : (ev) => {
            speakerStream.volume = speakerStream.volume - 0.01;
        },

        'on-clicked' : (ev) => {
            speakerStream.is_muted = !speakerStream.is_muted;
            ev.toggleClassName('disabled', speakerStream.is_muted);
        }
    })

    return speakerButton;
}

function Microphone() {
    const microphoneBox = Widget.Box({
        spacing : 10,
        children : [
            Widget.Icon().hook(microphoneStream, (self) => {
                const vol = microphoneStream.volume * 100;
                let icon = 'medium';
                if (vol >= 101) {
                    icon = 'high';
                } else if (vol >= 67) {
                    icon = 'medium';
                } else if (vol >= 34) {
                    icon = 'low';
                } else if (vol >= 0) {
                    icon = 'muted';
                }
                
                self.icon = `microphone-sensitivity-${icon}-symbolic`;
            }),
            Widget.Label({
                label : microphoneStream.bind('volume').as(vol => {
                    return `${Math.floor(vol * 100)}%`;
                })
            })
        ]
    })

    
    const microphoneButton = Widget.Button({
        child : microphoneBox,
        class_names : ['volume', 'volume-aqua'],
        'on-scroll-up' : (ev) => {
            microphoneStream.volume = microphoneStream.volume + 0.01;
        },

        'on-scroll-down' : (ev) => {
            microphoneStream.volume = microphoneStream.volume - 0.01;
        },

        'on-clicked' : (ev) => {
            microphoneStream.is_muted = !microphoneStream.is_muted;
            ev.toggleClassName('disabled', microphoneStream.is_muted);
        }
    })

    return microphoneButton;
}

function VolumeIndicator() {
    return Widget.Box({
        spacing : 10,
        children : [
            Speaker(),
            Microphone(),
        ]
    })
}

export default VolumeIndicator;