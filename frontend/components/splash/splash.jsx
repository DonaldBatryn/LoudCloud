import React from 'react'

class Splash extends React.Component {
    

    render(){
    
        return (
            <section className="splash">
                <div className="splash-text">
                    <h3>Welcome to</h3>
                    <h1>LoudCloud</h1>
                    <p className="splash-text-bottom">A streaming service for all of Donnie's favorite songs by Donnie.</p>
                    <h3 className="log-in-msg">Log In as a guest to start listening now.</h3>
                    <button className="submit splash-btn" onClick={(e) => {
                        this.props.openModal('Login')            
                        }
                        }>Continue as Guest</button>
                </div>
            </section>
        )
    }
}


export default Splash;