import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import './EditUser.css'

class EditUser extends Component {

    handleEdit = (e) => {
        e.preventDefault();
        var newFirstname = this.getFirstname.value;
        var newLastname = this.getLastname.value;
        var newCountry = this.getCountry.value
        var data = ({
            newFirstname,
            newLastname,
            newCountry
        });
        this.props.dispatch({ type: 'UPDATE', id: this.props.user.id, data: data })
    }

    render() {
        var { user } = this.props;
        return (
            <div className="form-card">
                <form className="form-edit" onSubmit={this.handleEdit}>
                    <div className="form-right">
                        <input className="input" type="text" placeholder="Enter First Name" required ref={(input) => this.getFirstname = input} defaultValue={user.firstname} />
                        <input className="input" placeholder="Enter Last Name" required ref={(input) => this.getLastname = input} defaultValue={user.lastname} />
                        <div className="country-selection">
                            <label htmlFor="">Select your country</label>
                            <select ref={(input) => this.getCountry = input} required defaultValue={user.country}>
                                <option value=""></option>
                                <option value="Perú">Perú</option>
                                <option value="EEUU">EEUU</option>
                                <option value="England">England</option>
                                <option value="Brasil">Brasil</option>
                            </select>
                        </div>
                    </div>
                    <div className="vcenter">
                        <button className="save font"><i className="far fa-save"></i></button>
                    </div>
                </form>
            </div>
        )
    }
}

EditUser.propTypes = {
    user: PropTypes.any
}

export default connect()(EditUser)