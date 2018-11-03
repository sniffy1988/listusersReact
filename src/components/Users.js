import React, {Component} from 'react';
import guid from '../helpers';
import PropTypes from 'prop-types';

class UsersList extends Component {
    static propTypes = {
        selectUserHandler : PropTypes.func.isRequired,
        users: PropTypes.array.isRequired
    };
    renderUsers = () => {
        const {users, selectUserHandler} = this.props;
        return users.map((user) => {
            let {username, email, phone} = user;
            return (
                <div
                    onClick={()=> selectUserHandler(user)}
                    className={'card'}
                    key={guid()}
                    style={{
                        'padding': '5px',
                        'cursor': 'pointer'
                    }}>
                    <h5>{username}</h5>
                    <p>{email}</p>
                    <p>{phone}</p>
                </div>
            )
        })
    };

    render() {
        return (
            <div>
                {this.renderUsers()}
            </div>
        );
    }
}

export default UsersList;
