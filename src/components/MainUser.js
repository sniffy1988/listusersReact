import React, {Component} from 'react';
import PropTypes from 'prop-types';

class MainUser extends Component {
    static propTypes = {
        user: PropTypes.object.isRequired,
        onUserDelete: PropTypes.func.isRequired
    };

    render() {
        let {user, onUserDelete} = this.props;

        return (
            <div>
                {user.name &&
                <div>
                    <a href="#" onClick={(e)=> onUserDelete(e, user)}>X</a>
                    <h3>{user.name}</h3>
                    <ul>
                        <li>
                            <b>username: </b> {user.username}
                        </li>
                        <li>
                            <b>email:</b> {user.email}
                        </li>
                        <li>
                            <b>phone:</b> {user.phone}
                        </li>
                        <li>
                            <b>website:</b> <a href="{user.website}">{user.website}</a>
                        </li>
                    </ul>
                </div>
                }
            </div>
        );
    }
}

export default MainUser;
