import React, { Component } from 'react';
import { observer, inject } from 'mobx-react';


const UserList = observer(class UserList extends Component {
    componentDidMount() {
        const { store } = this.props;
        console.log(store);
        store.getUsers();
    }

    render() {  
        const { store } = this.props;
        const userList = store.userList.map((user, registration_timestamp) =>
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
                    <a className={store.showMore} href='#' onClick={() => store.showMore()}>
                        <h4>Show More</h4>
                    </a>
                </div>
            </section>
        )
    }
})

export default inject('store')(observer(UserList))