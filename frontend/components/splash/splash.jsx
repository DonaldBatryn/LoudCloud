import React from 'react'

class Splash extends React.Component {

    render(){
        return (
            <section className="splash">
                <div className="splash-text">
                    <h3>Welcome to</h3>
                    <h1>LoudCloud</h1>
                    <p className="splash-text-bottom">A streaming service for all of <br></br> Donnie's favorite songs by Donnie.</p>
                    <h3 className="log-in-msg">Log In as a guest to start listening now.</h3>
                </div>
            </section>
        )
    }
}


export default Splash;