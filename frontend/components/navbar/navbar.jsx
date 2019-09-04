import React from 'react';
import { Link } from 'react-router-dom';

export default ({ currentUser, logout }) => {
 
    let display;
    if (currentUser){
        display = { 
            link1: <Link to={`/users/${currentUser.id}`}>{currentUser.username}</Link>,
            link2: <button onClick={logout}>Log Out</button>} 
    } else {
        display = {
            link1: <Link className="btn" to="/signup" >Sign Up</Link>,
            link2: <Link className="btn" to="/login" >Log In</Link>
        }
    }
    return (
        <header className="nav-bar">
            <p><img className="logo" src="/assets/cloud.png" alt="LoudCloud" /></p>
            <div className="nav-links"><Link to="/playlists">Playlists</Link></div>
            <div className="nav-links"><Link to="/songs">Songs</Link></div>
            <p className="nav-links">Search:  <input className="search-bar" type="text" spellCheck="false" ></input></p>
            <div className="nav-links" >{display.link1}</div>
            <div className="nav-links" >{display.link2}</div>
        </header>
    )
}

