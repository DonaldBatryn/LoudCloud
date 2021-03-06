import React from 'react'
import { Redirect } from 'react-router-dom'

class EditPlaylistForm extends React.Component {
    constructor(props) {
        super(props)
        this.state = this.props.playlist
        this.handleSubmit = this.handleSubmit.bind(this);
    }


    handleInput(field) {
        return (e) => {
            this.setState({ [field]: e.target.value })
        }
    }

    handleSubmit(e) {
        e.preventDefault();
        this.props.action(this.state).then(() => {
            if (this.props.errors.length > 0) {
                return
            } else {
                <Redirect to="/playlists" />
            }
        })
    }

    render() {
        let err = "";
        if (this.props.errors.length > 0) {
            err = this.props.errors.join(", ")
        }
        return (
            <div className="new-pl-main">
                <form className="new-pl-form" onSubmit={this.handleSubmit}>
                    <div className="pl-errors">{err}</div>
                    <label className="pl-label" htmlFor="pl-title">Title:&nbsp;&nbsp;&nbsp;
                        <input id="pl-title" type="text"
                            onChange={this.handleInput('title')} value={this.state.title} />
                    </label>
                    <input className="pl-create-button" type="submit" value={this.props.formType} />
                </form>
            </div>
        )
    }

}

export default EditPlaylistForm;