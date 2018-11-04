import React, { Component } from 'react';
import logo from '../../images/logo.svg';
import HeaderUser from '../../APIrequests/HeaderUser.js';

class Header extends Component {
    render() {
        return (
            <section id='header'> 
                <div className='container'>
                    <div className='header'>
                        <div className='header-logo'>
                            <img src={logo} alt={'Logo'} className='logo' />
                        </div>
                        <div className='header-nav'>
                            <div className='header-nav-item'>
                                <a href='#'>About me</a>
                            </div>
                            <div className='header-nav-item'>
                                <a href='#'>Relationships</a>
                            </div>
                            <div className='header-nav-item'>
                                <a href='#'>Requirements</a>
                            </div>
                            <div className='header-nav-item'>
                                <a href='#'>Users</a>
                            </div>
                            <div className='header-nav-item'>
                                <a href='#'>Sign up</a>
                            </div>
                        </div>
                        <HeaderUser/>
                    </div>
                </div>
            </section>
        )
    }
}

export default Header