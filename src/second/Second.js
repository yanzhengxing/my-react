import React, { Component } from 'react';
import logo from '../logo.svg';
import '../App.css';

class Second extends Component {
    constructor(props){
        super(props);
        this.state = {isToggleOn: true}
    }

    render() {
        return (
            <div className="App">
                <header className="App-header">
                    <img src={logo} className="App-logo" alt="logo" />
                    <h1 className="App-title">Welcome to React</h1>
                </header>
                <p className="App-intro">
                    To get started, edit <code>src/App.js</code> and save to reload.
                </p>
                <button onClick={this.handelClick} className='App-title'>{this.state.isToggleOn?'ON':'OFF'}</button>
            </div>
        );
    }
}

export default Second;
