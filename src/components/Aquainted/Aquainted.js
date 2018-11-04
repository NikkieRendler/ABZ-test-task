import React, { Component } from 'react'

class Aquainted extends Component {
    render() {
        return (
            <section id='aquainted'>
                <div className='container'>
                    <h1 className='aquainted-header'>
                        Let's get aquainted
                    </h1>
                    <div className='aquainted'>
                        <div className='aquainted-left-side'></div>
                        <div className='aquainted-right-side'>
                            <h3 className='aquainted-right-side-item'>
                                I am cool frontend developer
                            </h3>
                            <span className='aquainted-right-side-item'>
                                When real users have a slow experience on mobile,
                                they're much less likely to find what they are
                                looking for or purchase from you in the future.
                                For many sites this equates to a huge missed opportunity,
                                especially when more than half of visits are abandoned if
                                a mobile page takes over 3 seconds to load.
                            </span>
                            <span className='aquainted-right-side-item'>
                                Last week, Google Search and Ads teams announced two new speed
                                initiatives to help improve user-experience on the web.
                            </span>
                            <a href='#' className='aquainted-right-side-item'>
                                <h4>Sign up!</h4>
                            </a>
                        </div>
                    </div>
                </div>
            </section>
        )
    }
}

export default Aquainted