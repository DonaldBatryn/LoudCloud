import React from 'react'


class SongForm extends React.Component{
    constructor(props){
        super(props)
        this.state = this.props.song
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    handleInput(field){
        return (e) => {
            this.setState({ [field]: e.target.value })
        }
    }

    handleSubmit(e){
        e.preventDefault();
        this.props.processSong(this.state).then(() => {
            if (this.props.errors.length > 0){
                return
            }else{
                this.props.closeModal()
            }
        })
    }

    componentWillUnmount(){
        this.props.clearErrors()
    }

    render() {
        let type;
        if (this.props.formType === "Upload song") {
            type = 'Upload';
        }else{
            type = 'Update'
        }
        let err = this.props.errors;
        err = err.join(", ")
        return (
            <div className="modal is-open" >
                <form className="modal-form" onSubmit={this.handleSubmit}>
                    {/* <label className="instruction">Please {type} to continue to LoudCloud</label> */}
                    <div className="errors">{err}</div>
                
                    <span className="modal-close js-modal-close" onClick={this.props.closeModal}>&times;</span>


                    <label htmlFor="title">Title:</label>
                    <input className="form" id="title" type="text" spellCheck="false" value={this.state.title} onChange={this.handleInput('title')} />


                    <label htmlFor="album">Album:</label>
                    <input className="form" id="album" type="text" spellCheck="false" value={this.state.album_name} onChange={this.handleInput('album_name')} />

                    <label htmlFor="artist">Artist:</label>
                    <input className="form" id="artist" type="text" spellCheck="false" value={this.state.artist} onChange={this.handleInput('artist')} />
                    <div className="descrip-container">
                        <label htmlFor="description">Description:</label><br/>
                        <textarea className="form" id="description" type="text" spellCheck="false" value={this.state.description} onChange={this.handleInput('description')} />
                    </div>

                    {/* input for mp3 */}

                    <div id="submit-container">
                        <input className="submit" type="submit" value={type} />

                    </div>
                </form>
                <div className="modal-screen js-modal-close" onClick={this.props.closeModal}></div>
            </div>
        )
    }
}

export default SongForm;