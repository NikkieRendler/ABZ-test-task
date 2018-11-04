import React, { Component } from 'react';

class Technologies extends Component {
    render() {
        return (
            <section id='technologies'>
                <div className='container'>
                        <h1>
                            About my relationships with <br/>
                            web-development
                        </h1>
                        <div className='technologies'>
                            <div className='technologies-card'>
                                <div className='technologies-card-img technologies-card-item'></div>
                                <h3 className='technologies-card-header technologies-card-item'>
                                I'm in love with HTML
                                </h3>
                                <h4 className='technologies-card-text technologies-card-item'>
                                Hypertext Markup Language (HTML) is the standard markup language
                                for creating web pages and web applications.
                                </h4>
                            </div>
                            <div className='technologies-card'>
                                <div className='technologies-card-img technologies-card-item'></div>
                                <h3 className='technologies-card-header technologies-card-item'>
                                CSS is my best friend
                                </h3>
                                <h4 className='technologies-card-text technologies-card-item'>
                                Cascading Style Sheets (CSS) is a style sheet language 
                                used for describing the presentation of a document written in a markup language like HTML.
                                </h4>
                            </div>
                            <div className='technologies-card'>
                                <div className='technologies-card-img technologies-card-item'></div>
                                <h3 className='technologies-card-header technologies-card-item'>
                                JavaScript is my passion
                                </h3>
                                <h4 className='technologies-card-text technologies-card-item'>
                                JavaScript is a high-level, interpreted programming language. 
                                It is a language which is also characterized as dynamic, weakly typed, 
                                prototype-based and multi-paradigm.
                                </h4>
                            </div>
                        </div>
                    </div>
            </section>
        )
    }
}

export default Technologies