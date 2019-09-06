import React from 'react';
import { Link } from 'react-router-dom';
import { openModal } from '../../actions/modal_actions'

export default ({ currentUser, logout, openModal }) => {
 
    let display;
    if (currentUser){
        display = { 
            link1: <Link className="nav-links" to={`/users/${currentUser.id}`}>{currentUser.username}</Link>,
            link2: <button className="nav-links" id="logout" onClick={logout}>Log Out</button> 
            // link2: <Link to="/">Log Out</Link> 
        }
    } else {
        display = {
            link1: <button className="nav-links" onClick={() => openModal("Sign up")}>Sign Up</button>,
            link2: <button className="nav-links" onClick={() => openModal("Login")}>Log In</button>
           
        }
    }
    return (
        <div className="top-bar">
        <header className="nav-bar">
            <p><Link to="/home"><img className="logo" src="/assets/cloud.png" alt="LoudCloud" /></Link></p>
            <div className="nav-links"><Link to="/playlists">Playlists</Link></div>
                <div ><Link to="/songs"><button className="nav-links" onClick={() => openModal('Upload')}>Upload</button></Link></div>
            <p className="nav-links">Search:  <input className="search-bar" type="text" spellCheck="false" ></input></p>
            <div  >{display.link1}</div>
            <div  >{display.link2}</div>
        </header>
        </div>
    )
}

