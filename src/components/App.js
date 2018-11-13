import React, { Component } from 'react';
import Header from './Header';
import Landing from './Landing';
import Aquainted from './Aquainted';
import Requirements from './Requirements';
import Technologies from './Technologies';
import UserList from './UserList';
import Auth from './Auth'
import { observer, inject } from 'mobx-react';
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
            <Auth/>
        </div>
    ) 
}}

export default inject('store')(observer(App))