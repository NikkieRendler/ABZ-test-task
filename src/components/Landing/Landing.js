import React, { Component } from 'react';

class Landing extends Component {
    render() {
        return (
            <section id='landing'>
                <div className='container'>
                    <div className='landing'>
                        <div className='landing-left-side'>
                            <h1 className='landing-left-side-item'>
                                Test assignment for Frontend Developer position
                            </h1>
                            <span className='landing-left-side-item'>
                                We kindly remind you that your test assignment should
                                be submitted as a link to github/bitbucket repository.
                                Please be patient, we consider and respond to every application
                                that meets minimum requirements. We look forward to your submission.
                                Good luck!
                            </span>
                            <a href='#' className='landing-left-side-item'>
                            <h4>Sign up!</h4>
                            </a>
                        </div>
                        <div></div>
                    </div>
                </div>
            </section>
        )
    }
}

export default Landing