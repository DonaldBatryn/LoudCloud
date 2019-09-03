import React from 'react';
import { Link } from 'react-router-dom';

export default ({ currentUser, logout }) => {
    const display = currentUser ? (
        <ul>
            <li className="nav-links"><Link to={`/users/${currentUser.id}`}>{currentUser.username}</Link></li>
            <li className="nav-links"><button onClick={logout}>Log Out</button></li>
            
        </ul>
    ) : (
        <ul>
            <li className="nav-links"><Link className="btn" to="/signup" >Sign Up</Link></li>
            <li className="nav-links"><Link className="btn" to="/login" >Log In</Link></li>
        </ul>
    );
    return (
        <header className="nav-bar">
            <p><img className="logo" src="/assets/cloud.png" alt="LoudCloud" /></p>
            <div className="nav-links"><Link to="/playlists">Playlists</Link></div>
            <div className="nav-links"><Link to="/playlists">Tracks</Link></div>
            <p className="nav-links">Search:  <input className="search-bar" type="text" spellCheck="false" ></input></p>
            {display}
        </header>
    )
}

