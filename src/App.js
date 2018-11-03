import React, {Component} from 'react';
import Users from './components/Users';
import MainUser from './components/MainUser';
import axios from 'axios';


class App extends Component {
    state = {
        users: [],
        selectedUser: {}
    };

    selectUserHandler = (user) => {
        this.setState({
            selectedUser: user
        });
    };

    onUserDelete = (e, user) => {
        e.preventDefault();

        const oldUsers = this.state.users;

        let newUsers = oldUsers.filter((item) => {
           if(item.id !== user.id) {
               return true;
           }
        });

        const newSelected = oldUsers.find((item) => {
            return item.id === user.id + 1;
        });

        this.setState({
            users: newUsers,
            selectedUser: newSelected
        });
    };


    async componentDidMount() {
        const request = await axios.get('https://jsonplaceholder.typicode.com/users');
        // let {data} = users;
        if (request.status === 200) {
            let {data} = request;
            this.setState({
                users: data
            });
        }
    };

    render() {
        return (
            <div className={'container'}>
                <div className="row">
                    <div className="col-md-8">
                        <MainUser user={this.state.selectedUser} onUserDelete={this.onUserDelete}/>
                    </div>
                    <div className="col-md-4">
                        <Users users={this.state.users} selectUserHandler={this.selectUserHandler}/>
                    </div>
                </div>
            </div>
        );
    }
}

export default App;
