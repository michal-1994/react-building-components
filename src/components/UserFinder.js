import { Fragment, Component } from 'react';

import Users from './Users';

import classes from './UserFinder.module.css';

const DUMMY_USERS = [
    { id: 'u1', name: 'Max' },
    { id: 'u2', name: 'Manuel' },
    { id: 'u3', name: 'Julie' },
];

class UserFinder extends Component {
    constructor() {
        super();
        this.state = {
            filteredUsers: DUMMY_USERS,
            searchTerm: '',
        };
    };

    componentDidMount() {
        console.log('componentDidMount');
        this.setState({ filteredUsers: DUMMY_USERS });
    };

    componentDidUpdate(prevProps, prevState) {
        console.log('componentDidUpdate');
        if (prevState.searchTerm !== this.state.searchTerm) {
            console.log('[STATE SEARCH]', this.state.searchTerm);
            this.setState({
                filteredUsers: DUMMY_USERS.filter((user) => user.name.includes(this.state.searchTerm)),
            });
        };
    };

    searchChangeHandler(event) {
        this.setState({ searchTerm: event.target.value });
    };

    render() {
        return (
            <Fragment>
                <div className={classes.finder}>
                    <input type='search' onChange={this.searchChangeHandler.bind(this)} />
                </div>
                {console.log('[ARRAY]: ', this.state.filteredUsers)}
                <Users users={this.state.filteredUsers} />
            </Fragment>
        );
    };
};

export default UserFinder;
