import { observable, action, computed, decorate } from 'mobx';
import axios from 'axios';

class Store {
    userList = [];
    newList = [];
    nextUrl = '';
    showMore = 'visible';
    //Get list of users
    getUsers = () => {
        axios({
            method: 'GET',
            url: `https://frontend-test-assignment-api.abz.agency/api/v1/users?page=1&count=6`,
        })
            .then(response => {
                this.userList = response.data.users;
                this.nextUrl = response.data.links.next_url;
                console.log(this.userList);
                console.log(this.nextUrl)
            })
            return
    }

    //Load next page of users
    showMore = () => {
        axios({
            method: 'GET',
            url: this.nextUrl,
        })
            .then(response => {
                this.newList = response.data.users;
                this.nextUrl = response.data.links.next_url;
                this.userList = [...this.userList, ...this.newList]
                if(this.nextUrl === null) {
                    this.showMore = 'invisible'
                } 
            })
    }
}

decorate(Store, {
    userList: observable,
    newList: observable,
    nextUrl: observable,
    showMore: observable,
    getUsers: observable
});

export default Store;