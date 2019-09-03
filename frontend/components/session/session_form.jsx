import React from 'react';
import { Redirect } from 'react-router';
import { Link } from 'react-router-dom';

class SessionForm extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            username: "",
            password: ""
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
        this.props.processForm(this.state)
    }

    render(){
        let type;
        let linkType;
        if (this.props.formType === "login"){
            type = 'Login';
            linkType = 'signup';
        } else {
            type = 'Sign Up';
            linkType = 'login'
        }
        let err = this.props.errors.errors;
        let firstLet = linkType.charAt(0).toUpperCase()
        let linkText = firstLet + linkType.slice(1) 
        return (
            <div>
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
                <h3><Link to={`/${linkType}`}>{linkText}</Link></h3>
                {err}
            </div>
        )
    }
}

export default SessionForm;