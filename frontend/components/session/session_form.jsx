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

    componentWillUnmount(){
        this.props.clearErrors()
    }

    render(){
        let type;
        let linkType;
        let { formType, session, closeModal, otherForm } = this.props;
        if (formType === "Login"){
            type = 'Login';
            let err = session;
            err = err.join(", ")
            return (
                <div className="modal is-open" >
                    <form className="modal-form" onSubmit={this.handleSubmit}>
                        <label className="instruction">Please {type} to continue to LoudCloud</label>
                    <div className="errors">{err}</div>
                
                        <span className="modal-close js-modal-close" onClick={closeModal}>&times;</span>

                            <input className="form" 
                                id="username" 
                                type="text" 
                                spellCheck="false" 
                                value={this.state.username} 
                                onChange={this.handleInput('username')}
                                placeholder="Username" />
                        

                            <input className="form" 
                            id="password" 
                            type="password" 
                            spellCheck="false" 
                            value={this.state.password} 
                            onChange={this.handleInput('password')}
                            placeholder="Password" />
                        
                        <div id="submit-container">
                            <input id="demo-submit"  className="submit" type="submit" value={type} />
                            <button className="submit" onClick={this.prettyDemoUser}>Continue as Guest</button><br/>
                            {/* {otherForm} */}

                        </div>
                    </form>
                    <div className="modal-screen js-modal-close" onClick={closeModal}></div>
                </div>
            )
        } else {
            type = 'Sign Up';
            let err = session;
            err = err.join(", ")
            return (
                <div className="modal is-open" >
                    <form className="modal-form" onSubmit={this.handleSubmit}>
                            <label className="instruction">Please {type} to continue to LoudCloud</label>
                    <div className="errors">{err}</div>
                  
                        <span className="modal-close js-modal-close" onClick={closeModal}>&times;</span>

                            <input className="form" 
                                id="username" 
                                type="text" 
                                spellCheck="false" 
                                value={this.state.username} 
                                onChange={this.handleInput('username')}
                                placeholder="Create a Username" />
                        
                        
                        <input className="form" 
                            id="email" 
                            type="text" 
                            spellCheck="false" 
                            value={this.state.email} 
                            onChange={this.handleInput('email')}
                            placeholder="Enter your Email" />
                        

                        <input className="form" 
                            id="password" 
                            type="password" 
                            spellCheck="false" 
                            value={this.state.password} 
                            onChange={this.handleInput('password')}
                            placeholder="Set a Password" />

                        <div id="submit-container">
                            <input className="submit" type="submit" value={type}/>
                            {otherForm}
                        </div>
                    </form>
                    <div className="modal-screen js-modal-close" onClick={closeModal}></div>
                    
                </div>
            )
        }
    }
}

export default SessionForm;