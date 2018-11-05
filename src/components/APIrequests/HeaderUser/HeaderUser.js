import React, { Component } from 'react'
import axios from 'axios';
import signOut from '../../../icons/sign-out.svg';

class HeaderUser extends Component {
    constructor(props) {
        super(props);
        this.state = {
            userName: '',
            userEmail: '',
            userImg: ''
        }
    }
    componentDidMount() {
        axios({
            method: 'GET',
            url: 'https://frontend-test-assignment-api.abz.agency/api/v1/users/1',
            params: {
                userId: 1
            }
        })
            .then(response => {
                let user = response.data.user
                console.log('headerUser:',user);
                this.setState({ userName: user.name })
                this.setState({ userEmail: user.email })
                this.setState({ userImg: user.photo })
            })
    }
    render() {
        return (
            <div className='header-profile'>
                <div className='header-profile-text'>
                    <span>{this.state.userName}</span>
                    <span>{this.state.userEmail}</span>
                </div>
                <img src={this.state.userImg} alt='User img' className='header-profile-pic' />
                <img src={signOut} alt='Sign Out' />
            </div>
        )
    }
}

export default HeaderUser