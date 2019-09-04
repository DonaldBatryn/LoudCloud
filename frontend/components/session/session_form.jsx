import React from 'react';
import { Redirect } from 'react-router';
import { Link } from 'react-router-dom';

class SessionForm extends React.Component {
    constructor(props){
        super(props)
        if (this.props.formType === "Login"){
            this.state = {
                username: "",
                password: ""
            }
        } else {
            this.state = {
                username: "",
                email: "",
                password: ""
            }
        }
        this.handleSubmit = this.handleSubmit.bind(this)
        this.handleDemo = this.handleDemo.bind(this);
    }

    handleInput(field){
        return (e) => {
            this.setState({[field]: e.target.value })
        }
    }

    handleSubmit(e){
        e.preventDefault();
        this.props.processForm(this.state).then(
            () => this.props.history.push("/songs")
        )
    }

    handleDemo(e){
        e.preventDefault();
        if (this.props.formType === "Login"){
            this.props.processForm({
                username: "Guest",
                password: '123456'
            }).then(() => this.props.history.push("/songs"))
        } else {
            this.props.processForm({
                username: "Guest",
                email: 'guest@loudcloud.com',
                password: '123456'
            }).then(() => this.props.history.push("/songs"))
        }
    }

    render(){
        let type;
        let linkType;
        
        if (this.props.formType === "Login"){
            type = 'Login';
            let err = this.props.session.errors;
           
            return (
                <div className="modal is-open" >
                    <form className="modal-form" onSubmit={this.handleSubmit}>
                    <div className="errors">{err}</div>
                        <button className="submit" onClick={this.handleDemo}>Continue as Guest</button><br/>
                        <span className="modal-close js-modal-close">&times;</span>


                        <label htmlFor="username">Username:</label>
                            <input id="username" type="text" spellCheck="false" value={this.state.username} onChange={this.handleInput('username')} />
                        
                      
                        <label htmlFor="password">Password:</label>
                            <input id="password" type="password" spellCheck="false" value={this.state.password} onChange={this.handleInput('password')} />
                        
                        <div id="submit-container">
                            <input className="submit" type="submit" value={type} />
                            <label className="instruction">Please {type} to continue to LoudCloud</label>
                        </div>
                    </form>
                    <div className="modal-screen js-modal-close"></div>
                </div>
            )
        } else {
            type = 'Sign Up';
            let err = this.props.session.errors;
            return (
                <div className="modal is-open" >
                    <form className="modal-form" onSubmit={this.handleSubmit}>
                    <div className="errors">{err}</div>
                        <button className="submit" onClick={this.handleDemo}>Continue as Guest</button><br />
                        <span className="modal-close js-modal-close">&times;</span>


                        <label htmlFor="username">Username:</label>
                            <input id="username" type="text" spellCheck="false" value={this.state.username} onChange={this.handleInput('username')}/>
                        
                        <label htmlFor="email">Email: </label>
                        <input id="email" type="text" spellCheck="false" value={this.state.email} onChange={this.handleInput('email')} />
                        
                        <label htmlFor="password">Password:</label>
                        <input id="password" type="password" spellCheck="false" value={this.state.password} onChange={this.handleInput('password')} />
                        <div id="submit-container">
                            <input className="submit" type="submit" value={type}/>
                            <label className="instruction">Please {type} to continue to LoudCloud</label>
                        </div>
                    </form>
                    <div className="modal-screen js-modal-close"></div>
                    
                </div>
            )
        }
    }
}

export default SessionForm;