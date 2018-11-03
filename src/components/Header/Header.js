import React, { Component } from 'react';
import logo from '../../images/logo.svg';
import user from '../../images/user-superstar-2x.jpg';
import signOut from '../../icons/sign-out.svg';

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
                            <div clasName='header-nav-item'>
                                <a href='#'>About me</a>
                            </div>
                            <div clasName='header-nav-item'>
                                <a href='#'>Relationships</a>
                            </div>
                            <div clasName='header-nav-item'>
                                <a href='#'>Requirements</a>
                            </div>
                            <div clasName='header-nav-item'>
                                <a href='#'>Users</a>
                            </div>
                            <div clasName='header-nav-item'>
                                <a href='#'>Sign up</a>
                            </div>
                        </div>
                        <div className='header-profile'>
                            <div className='header-profile-text'>
                                <span>Superstar</span>
                                <span>Superstar@gmail.com</span>
                            </div>
                            <img src={user} className='header-profile-pic' />
                            <img src={signOut} />
                        </div>
                    </div>
                </div>
            </section>
        )
    }
}

export default Header