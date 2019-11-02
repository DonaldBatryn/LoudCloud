import React from 'react';

class Volume extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            volume: 1,
            muted: false
        }
        this.dragging = false;
        this.yo = false;
        this.beginDrag = this.beginDrag.bind(this);
        this.dragVolume = this.dragVolume.bind(this);
        this.endDrag = this.endDrag.bind(this);
        this.toggleMute = this.toggleMute.bind(this);
    }

    componentDidMount() {
        document.addEventListener("mousemove", e => {
            this.dragVolume(e);
        });
        document.addEventListener("mouseup", e => {
            this.endDrag(e);
        })
    }

    offsetY(e) {
        const offset = e.clientY - 10 - document.getElementsByClassName("volume-bar-seek")[0].getClientRects()[0].y;
        if (offset < 0) {
            return 100;
        } else if (offset > 100) {
            return 0;
        } else {
            return 100 - offset;
        }
    }

    beginDrag(e) {
        e.preventDefault();
        this.dragging = true;
        this.setState({
            volume: this.offsetY(e) / 100
        })
    }

    dragVolume(e) {
        if (this.dragging) {
            this.setState({
                volume: this.offsetY(e) / 100
            })
        }
    }

    endDrag(e) {
        if (this.dragging) {
            this.dragging = false;
            this.setState({
                volume: this.offsetY(e) / 100
            })
        }
    }

    toggleMute() {
        if (!this.state.muted) {
            this.setState({
                volume: 0,
                prevVolume: this.state.volume,
                muted: true
            });
        } else {
            this.setState({
                volume: this.state.prevVolume,
                muted: false
            })
        }
    }

    render() {
        const muteImage = "https://musical-breakout-js.s3.us-east-2.amazonaws.com/mute.png"
        const soundImage = "https://musical-breakout-js.s3.us-east-2.amazonaws.com/volume.png"
        let volumeIcon;
        let volumeLength = 100 * this.state.volume;
        if (this.state.muted || this.state.volume === 0) {
            volumeLength = 0;
            volumeIcon = <button onClick={this.toggleMute} className="icon-shuffle "><img id="mute-button" className="controls" src={muteImage} alt="unmute" /></button>
        } else {
            volumeIcon = <button onClick={this.toggleMute} className="icon-shuffle "><img id="mute-button" className="controls" src={soundImage} alt="mute" /></button>
        }
        if (this.props.song) {
            this.props.song.volume = this.state.volume;
        }
        const show = this.dragging ? " show" : "";

        return (
            <div className="volume-control">
                {volumeIcon}
                <div className={`volume-slider${show}`}>
                    <div className="volume-full-bar"></div>
                    <div className="volume-current-bar" style={{ height: volumeLength, top: 110 - volumeLength }}></div>
                    <div className="volume-circle" style={{ top: 106 - volumeLength }}></div>
                    <div className="volume-bar-seek" onMouseDown={this.beginDrag}></div>
                </div>
            </div>
        )
    }
}

export default Volume;