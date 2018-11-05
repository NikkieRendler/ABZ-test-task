import React, { Component } from 'react';
import Header from './Header';
import Landing from './Landing';
import Aquainted from './Aquainted';
import Requirements from './Requirements';
import Technologies from './Technologies';
import UserList from './APIrequests/UserList';
import '../css/main.css';

class App extends Component {
    render() {
        return(
        <div>
            <Header/>
            <Landing/>
            <Aquainted/>
            <Technologies/>
            <Requirements/>
            <UserList/>
        </div>
    ) 
}}

export default App