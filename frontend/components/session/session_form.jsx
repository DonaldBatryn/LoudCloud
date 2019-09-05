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
        const user = Object.assign({}, this.state)
   
        this.props.processForm(user).then(() => {
        if (this.props.session.length > 0){
            return
           
        }else {
            this.props.closeModal()
        }
        })
      
    }

    handleDemo(e){
        e.preventDefault();
        this.props.processForm({
            username: "Guest",
            password: '123456'
        }).then(this.props.closeModal())
       
    }


    componentWillUnmount(){
        this.props.clearErrors()
    }

    // renderErrors(){
    //     return (
    //         <ul>
    //             {this.props.session.errors.map((error, i) => (
    //                 <li key={`error-${i}`}>
    //                     {error}
    //                 </li>
    //             ))}
    //         </ul>
    //     )
    // }

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
                            <input id="username" type="text" spellCheck="false" value={this.state.username} onChange={this.handleInput('username')} />
                        
                      
                        <label htmlFor="password">Password:</label>
                            <input id="password" type="password" spellCheck="false" value={this.state.password} onChange={this.handleInput('password')} />
                        
                        <div id="submit-container">
                            <input className="submit" type="submit" value={type} />
                            <button className="submit" onClick={this.handleDemo}>Continue as Guest</button><br/>
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
                            <input id="username" type="text" spellCheck="false" value={this.state.username} onChange={this.handleInput('username')}/>
                        
                        <label htmlFor="email">Email: </label>
                        <input id="email" type="text" spellCheck="false" value={this.state.email} onChange={this.handleInput('email')} />
                        
                        <label htmlFor="password">Password:</label>
                        <input id="password" type="password" spellCheck="false" value={this.state.password} onChange={this.handleInput('password')} />
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