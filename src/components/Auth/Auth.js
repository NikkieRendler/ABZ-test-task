import React, { Component } from 'react'
import Position from './Position';
import LoadFile from './LoadFile'

class Auth extends Component {
    render() {
        return (
            <section id='auth'>
                <div className='container'>
                    <div className='auth-header'>
                        <h1>Register to get a work</h1>
                        <h4>Attention! After successful registration and alert,
                            update the list of users in the block from the top
                            </h4>
                    </div>
                    <div className='auth-form'>
                        <div className='auth-form-item' placeholder='Your name'>
                            <span className='auth-form-item-header'>
                                Your Name
                            </span>
                            <input />
                        </div>
                        <div className='auth-form-item' placeholder='Your email'>
                            <span className='auth-form-item-header'>
                                Your Email
                            </span>
                            <input />
                        </div>
                        <div className='auth-form-item' placeholder='+38 (___)  ___ __ __'>
                            <span className='auth-form-item-header'>
                                Your phone
                            </span>
                            <input />
                        </div>
                        <Position />
                        <LoadFile />
                    </div>
                    <a>
                        <h4>Sign up</h4>
                    </a>
                </div>
            </section>
        )
    }
}

export default Auth