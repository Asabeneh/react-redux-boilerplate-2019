import React from 'react'


// Higher order component
const HigherOrderComponent = AnyComponent => {
    const colors = ['red', 'blue', 'green', 'pink', 'yellow', 'orange'];
    const randomColor = colors[Math.floor(Math.random() * colors.length)];

    return () => (
        <div style={{ backgroundColor: randomColor }}>
            <AnyComponent name="super component" />
        </div>
    );
};

// Home component
const Home = props => {
    console.log(props)
    return (
        <div>
            <h1>This is the home component</h1>
            <p>Props coming from {props.name}</p>
        </div>
    )
}


export default HigherOrderComponent(Home)


// The App.js component

import React, { Component } from 'react';
import Home from './Home';

import './App.css';
class App extends Component {
    render() {
        return <div className="App">
            <Home />
        </div>;
    }
}

export default App;