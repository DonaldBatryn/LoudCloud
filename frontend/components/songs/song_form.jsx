import React from 'react'


class SongForm extends React.Component{
    constructor(props){
        super(props)
        this.state = this.props.song
        this.handleSubmit = this.handleSubmit.bind(this)
        this.handleFile = this.handleFile.bind(this)
    }

    handleInput(field){
        return (e) => {
            this.setState({ [field]: e.target.value })
        }
    }

    handleSubmit(){
        if (!this.state.title){
            this.setState({noTitle: true})
            return
        }

        const formData = new FormData();
        formData.append('song[user_id]', this.state.user_id)
        formData.append('song[title]', this.state.title)
        if (this.state.picture) {
            formData.append('song[image]', this.state.image)
        }
        formData.append('song[audio]', this.state.audio)
        formData.append('song[description]', this.state.description)

        this.setState({uploading: true})

        this.props.upload(formData).then(result => this.props.history.push('/songs/${result.song.song.id}'),
                            err => this.setState({uploading: false}) );
    }

    handleCancel(){
        this.setState({
            user_id: this.props.currentUser.id,
            title: "",
            picture: null,
            song: null,
            description: "",
            uploading: false
        })
    }

    componentWillUnmount(){
        this.props.clearErrors()
    }

    render() {
        let { formType, errors, closeModal } = this.props;
        let type;
        if (formType === "Upload song") {
            type = 'Upload';
        }else{
            type = 'Update'
        }
        let err = errors;
        err = err.join(", ")
        return (
            <div className="modal is-open" >
                <form id="song-form" className="modal-form" onSubmit={this.handleSubmit}>
                    {/* <label className="instruction">Please {type} to continue to LoudCloud</label> */}
                    <div className="errors">{err}</div>
                
                    <span className="modal-close js-modal-close" onClick={closeModal}>&times;</span>


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


                    <div id="submit-container">
                      
                        <input type="file" name="song[:audio]" onChange={this.handleFile}/>
                    
                        <input className="submit" type="submit" value={type} />

                    </div>
                </form>
                <div className="modal-screen js-modal-close" onClick={closeModal}></div>
            </div>
        )
    }
}

export default SongForm;