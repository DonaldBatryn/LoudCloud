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
        // this.handleDemo = this.handleDemo.bind(this);
        this.prettyDemoUser = this.prettyDemoUser.bind(this);
    }

    handleInput(field){
        return (e) => {
            this.setState({[field]: e.target.value })
        }
    }

    handleSubmit(e){
        e.preventDefault();
        const user = Object.assign({}, this.state)
   
        this.props.processForm(user).then(() => {
        if (this.props.session.length > 0){
            return
           
        }else {
            this.props.closeModal()
        }
        })
    }

    async prettyDemoUser(e) {
        e.preventDefault();

        const demoUser = {
            username: 'Guest',
            password: '123456'
        };

        const sleep = ms => new Promise(res => setTimeout(res, ms));

        document.getElementById('username').focus();
        for (let i = 1; i <= demoUser.username.length; i++) {
            this.setState({ username: demoUser.username.substr(0, i) });
            await sleep(50);
        }

        await sleep(250);

        document.getElementById('password').focus();
        for (let i = 1; i <= demoUser.password.length; i++) {
            this.setState({ password: demoUser.password.substr(0, i) });
            await sleep(50);
        }

        await sleep(500);

        document.getElementById('demo-submit').click();
        document.getElementById('password').blur();
    }

    // handleDemo(e){
    //     e.preventDefault();
    //     this.props.processForm({
    //         username: "Guest",
    //         password: '123456'
    //     }).then(this.props.closeModal())
       
    // }

    componentWillUnmount(){
        this.props.clearErrors()
    }

    render(){
        let type;
        let linkType;
        
        if (this.props.formType === "Login"){
            type = 'Login';
            let err = this.props.session;
            err = err.join(", ")
            return (
                <div className="modal is-open" >
                    <form className="modal-form" onSubmit={this.handleSubmit}>
                        <label className="instruction">Please {type} to continue to LoudCloud</label>
                    <div className="errors">{err}</div>
                    {/* {this.renderErrors()} */}
                        <span className="modal-close js-modal-close" onClick={this.props.closeModal}>&times;</span>


                        <label htmlFor="username">Username:</label>
                            <input className="form" id="username" type="text" spellCheck="false" value={this.state.username} onChange={this.handleInput('username')} />
                        
                      
                        <label htmlFor="password">Password:</label>
                            <input className="form" id="password" type="password" spellCheck="false" value={this.state.password} onChange={this.handleInput('password')} />
                        
                        <div id="submit-container">
                            <input id="demo-submit"  className="submit" type="submit" value={type} />
                            <button className="submit" onClick={this.prettyDemoUser}>Continue as Guest</button><br/>
                            {this.props.otherForm}

                        </div>
                    </form>
                    <div className="modal-screen js-modal-close" onClick={this.props.closeModal}></div>
                </div>
            )
        } else {
            type = 'Sign Up';
            let err = this.props.session;
            err = err.join(", ")
            return (
                <div className="modal is-open" >
                    <form className="modal-form" onSubmit={this.handleSubmit}>
                            <label className="instruction">Please {type} to continue to LoudCloud</label>
                    <div className="errors">{err}</div>
                        {/* {this.renderErrors()} */}
                        <span className="modal-close js-modal-close" onClick={this.props.closeModal}>&times;</span>


                        <label htmlFor="username">Username:</label>
                            <input className="form" id="username" type="text" spellCheck="false" value={this.state.username} onChange={this.handleInput('username')}/>
                        
                        <label htmlFor="email">Email: </label>
                        <input className="form" id="email" type="text" spellCheck="false" value={this.state.email} onChange={this.handleInput('email')} />
                        
                        <label htmlFor="password">Password:</label>
                        <input className="form" id="password" type="password" spellCheck="false" value={this.state.password} onChange={this.handleInput('password')} />
                        <div id="submit-container">
                            <input className="submit" type="submit" value={type}/>
                            {this.props.otherForm}
                        </div>
                    </form>
                    <div className="modal-screen js-modal-close" onClick={this.props.closeModal}></div>
                    
                </div>
            )
        }
    }
}

export default SessionForm;