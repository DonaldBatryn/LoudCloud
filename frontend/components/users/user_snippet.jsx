import React from 'react'
import { Link, Redirect } from 'react-router-dom';

class UserSnippet extends React.Component{
    constructor(props){
        super(props)
        this.handleShow = this.handleShow.bind(this)
    }

    handleShow(e){
        e.preventDefault();
        <Redirect to={`/users/${this.props.user.id}`} />
        // onClick = { this.handleShow }
    }

    render(){
        console.log(this.props)
        return (
            <Link className="user-link" to={`/users/${this.props.user.id}`} ><div className="user-snip">
                <img className="user-thumb" src="/assets/cloud.png" alt={this.props.user.username} />
                <h4 className="name">{this.props.user.username}</h4>
            </div></Link>
        )
    }
}

export default UserSnippet;