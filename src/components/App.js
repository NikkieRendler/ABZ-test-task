import React, { Component } from 'react';
import Header from './Header';
import Landing from './Landing';
import Requirements from './Requirements';
import Technologies from './Technologies';
import UserList from './UserList';
import '../css/main.css';

class App extends Component {
    render() {
        return(
        <div>
            <Header/>
            <Landing/>
        </div>
    ) 
}}

export default App