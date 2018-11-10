import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import User from '../User/User';
import userReducer from '../../Reducers/userReducer';
import EditUser from '../EditUser/EditUser';
import './AllUsers.css'

class AllUsers extends Component {
    render() {
        var { users } = this.props
        return (
            <div className="users-container">
                <h1 className="title-users">All Users</h1>
                <div className="grid-container">
                    {users.map((user) =>
                        user.edit ? <EditUser key={user.id} user={user} /> : <User key={user.id} user={user} />)}
                </div>
            </div>
        )
    }
}

AllUsers.propTypes = {
    users: PropTypes.any
}

const mapStateProps = (state) => {
    return {
        users: state
    }
}

export default connect(mapStateProps)(AllUsers)