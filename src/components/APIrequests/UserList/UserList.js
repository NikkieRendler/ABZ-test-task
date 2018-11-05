import React, { Component } from 'react';
import axios from 'axios';

class UserList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            userList: [],
            newList: [],
            nextUrl: '',
            showMore: ''
        }
    }
    componentDidMount() {
        axios({
            method: 'GET',
            url: `https://frontend-test-assignment-api.abz.agency/api/v1/users?page=1&count=6`,
        })
            .then(response => {
                let userList = response.data.users
                let nextUrl = response.data.links.next_url
                console.log('userList:', userList);
                console.log(nextUrl);
                this.setState({ userList: userList });
                this.setState({nextUrl: nextUrl})
            })
    }

    showMore = () => {
        axios({
            method: 'GET',
            url: this.state.nextUrl,
        })
            .then(response => {
                let newList = response.data.users
                let nextUrl = response.data.links.next_url
                if(nextUrl === null) {
                    this.state.showMore = 'invisible'
                } 
                console.log('newList:', newList);
                this.setState({newList: newList});
                this.setState({userList: [...this.state.userList, ...this.state.newList]});
                this.setState({nextUrl: nextUrl})
                console.log(this.state.userList)
            })
    }
    render() {  
        const userList = this.state.userList.map((user, registration_timestamp) =>
            <div key={registration_timestamp} className='userList-user'>
                <img src={user.photo} className='user-photo'></img>
                <div className='user-info'>
                    <h4>{user.name}</h4>
                    <span className='user-text'>{user.position}</span>
                    <span className='user-text'>{user.email}</span>
                    <span className='user-text'>{user.phone}</span>
                </div>

            </div>
        )
        return (
            <section id='userList'>
                <div className='container'>
                    <div className='userList-header'>
                        <h1>
                            Our cheerful users
                    </h1>
                        <h4>
                            Attention! Sorting users by registration date
                        </h4>
                    </div>
                    <div className='userList'>
                        {userList}
                    </div>
                    <a className={this.state.showMore} href='#' onClick={() => this.showMore()}>
                        <h4>Show More</h4>
                    </a>
                </div>
            </section>
        )
    }
}

export default UserList