import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import './User.css'

class User extends Component {

    handleDelete = (e) => {
        this.props.dispatch({
            type: 'DELETE_USER',
            id: this.props.user.id
        });
    }

    handleEdit = (e) => {
        this.props.dispatch({
            type: 'EDIT_USER',
            id: this.props.user.id
        })
    }

    render() {
        var { user } = this.props
        return (
            <div className="user-card">
                <div className="right">
                    <div className="items">
                        <h2>{user.firstname}</h2>
                        <p>{user.lastname}</p>
                        <p className="cursive">{user.country}</p>
                    </div>
                </div>
                <div className="left">
                    <button className="edit" onClick={() => this.handleEdit()}><i className="far fa-edit"></i></button>
                    <button className="delete" onClick={() => this.handleDelete()}><i className="far fa-trash-alt"></i></button>
                </div>
            </div>
        )
    }
}

User.propTypes = {
    user: PropTypes.any
}

export default connect()(User)