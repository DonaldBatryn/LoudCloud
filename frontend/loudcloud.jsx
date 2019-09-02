import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/store';
import Root from './components/root';

document.addEventListener("DOMContentLoaded", () => {
    // let preloadedState = undefined;
    // if (window.currentUser) {
        //     preloadedState = {
    //         session: {
        //             currentUser: window.currentUser
    //         }
    //     }
    // }
    const root = document.getElementById('root');
    const store = configureStore();
    ReactDOM.render(<Root store={store} />, root)
})


