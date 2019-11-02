import React from 'react';

class ProgressBar extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            progress: 0
        }
        this.dragging = false;
        this.interval = null;
        this.updateProgress = this.updateProgress.bind(this);
        this.beginDrag = this.beginDrag.bind(this);
        this.dragProgress = this.dragProgress.bind(this);
        this.endDrag = this.endDrag.bind(this);
    }

    componentDidMount(){
        document.addEventListener("mousemove", e => {
            if (this.props.song.duration){
                this.dragProgress(e);

            }
        })

        document.addEventListener("mouseup", e => {
            if (this.props.song.duration){
                this.endDrag(e);

            }
        })
    }

    updateProgress(){
        if (this.props.song){
            if (this.props.song.currentTime === this.props.song.duration){
                this.props.song.load();
                this.setState({
                    progress: 0
                })
                if (!this.props.loop){
                    this.props.song.pause();
                    this.props.pause();
                } else {
                    this.props.song.play();
                    if (!this.interval){
                        this.interval = setInterval(() => {
                            this.updateProgress()
                        }, 250)
                    }
                }
            } else {
                this.setState({
                    progress: `${this.props.song.currentTime / this.props.song.duration}`
                })
            }
        }
    }

    offsetX(e){
        // give the " " element className 'play-bar'
        const offset = e.clientX - document.getElementsByClassName("play-bar")[0].getClientRects()[0].x;
        if (offset < 0){
            return 0;
        }else if (offset > 500) {
            return 500;
        } else {
            return offset;
        }
    }

    beginDrag(e){
        if (this.props.song) {
            e.preventDefault();
            this.dragging = true;
            this.setState({
                currentMouseX: (this.offsetX(e))
            })
        }
    }

    dragProgress(e){
        if (this.props.song && this.dragging){
            this.setState({
                currentMouseX: (this.offsetX(e))
            })
        }
    }

    endDrag(e){
        if (this.props.song && this.dragging){
            this.dragging = false;
            this.setState({
                progress: ((this.offsetX(e)) / 500)
            }, () => {
                this.props.song.currentTime = +(this.state.progress * this.props.song.duration).toFixed(6)
            })
        }
    }

    render(){
        let elapsedTime = "0:00";
        let remainingTime = "-0:00";
        if (this.props.song){
            const currentTime = Math.floor(this.props.song.currentTime);
            remainingTime = Math.floor(this.props.song.duration) - currentTime;
            let currentMinutes = Math.floor(currentTime / 60);
            if (this.props.song.duration / 60 > 10 && currentMinutes < 10){
                currentMinutes = `0${currentMinutes}`;
            } else {
                currentMinutes = `${currentMinutes}`
            }
            let currentSeconds = currentTime % 60;
            currentSeconds < 10 ? currentSeconds = `0${currentSeconds}` : currentSeconds = `${currentSeconds}`;
            elapsedTime = `${currentMinutes}:${currentSeconds}`;
            let remainingMinutes = Math.floor(remainingTime / 60);
            if (this.props.song.duration / 60 > 10 && remainingMinutes < 10){
                remainingMinutes = `0${remainingMinutes}`
            } else {
                remainingMinutes = `${remainingMinutes}`
            }
            let remainingSeconds = remainingTime % 60;
            remainingSeconds < 10 ? remainingSeconds = `0${remainingSeconds}` : remainingSeconds = `${remainingSeconds}`
            this.props.song.duration ? remainingTime = `-${remainingMinutes}:${remainingSeconds}` : remainingTime = "-0:00";

            if(!this.props.song.paused && !this.interval) {
                this.interval = setInterval(() => {
                    this.updateProgress()
                }, 50)
            } else if (this.props.song.paused && this.interval) {
                clearInterval(this.interval);
                this.interval = null;
            }
        } else if (this.interval) {
            clearInterval(this.interval)
        }

        let progressLength = 500 * this.state.progress;
        if (this.dragging){
            progressLength = this.state.currentMouseX;
        }
        const show = this.dragging ? " show" : "";

        return (
            <div className="progress">
                <div className="elapsed-time">{elapsedTime}</div>
                <div className="play-bar">
                    <div className="full-line"></div>
                    <div className="current-line" style={{width: progressLength + 'px'}}></div>
                    <div className={`circle${show}`} style={{left: (progressLength - 4) + 'px'}}></div>
                    <div className="play-bar-seek" onMouseDown={this.beginDrag}></div>
                </div>
                <div className="remaining-time">{remainingTime}</div>
            </div>
        )
    }
}

export default ProgressBar;