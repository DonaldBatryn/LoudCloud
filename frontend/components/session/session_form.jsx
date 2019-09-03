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

    render(){
        let type;
        let linkType;
        
        if (this.props.formType === "Login"){
            type = 'Login';
            let err = this.props.errors.errors;
           
            return (
                <div className="session-form" >
                <h2>{type}</h2>
                <form onSubmit={this.handleSubmit}>
                    <label>Username:
                        <input type="text" value={this.state.username} onChange={this.handleInput('username')}/>
                    </label>
                   
                    <label>Password:
                        <input type="password" value={this.state.password} onChange={this.handleInput('password')} />
                    </label>
                    <input type="submit" value={type}/>
                </form>
                {err}
            </div>
            )
        } else {
            type = 'Sign Up';
            let err = this.props.errors.errors;
            return (
                <div className="session-form" >
                    <h2>{type}</h2>
                    <form onSubmit={this.handleSubmit}>
                        <label>Username:
                            <input type="text" value={this.state.username} onChange={this.handleInput('username')}/>
                        </label><br/>
                        <label>Email:<br/>
                            <input type="text" value={this.state.email} onChange={this.handleInput('email')} />
                        </label><br/>
                        <label>Password:
                            <input type="password" value={this.state.password} onChange={this.handleInput('password')} />
                        </label><br/>
                        <input type="submit" value={type}/>
                    </form>
                    {err}
                </div>
            )
        }
    }
}

export default SessionForm;