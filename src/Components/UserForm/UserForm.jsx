import React, { Component } from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import './UserForm.css'

class UserForm extends Component {

    handleSubmit = (e) =>{
        e.preventDefault();
        var firstname = this.getFirstname.value;
        var lastname = this.getLastname.value;
        var country = this.getCountry.value
        var data = ({
            id: new Date(),
            firstname,
            lastname,
            country,
            edit: false
        });

        this.props.dispatch({
            type: 'ADD_USER',
            data
        });

        this.getFirstname.value = '';
        this.getLastname.value = '';
        this.getCountry.value = ''
    }

    render() {
        return (
            <div className="create-container">
                <h1 className="title-container">Create User</h1>
                <form className="user-form" onSubmit={this.handleSubmit}>
                    <input className="input" type="text" placeholder="Enter First Name" required ref={(input) => this.getFirstname = input}/>
                    <input className="input" cols="30" rows="10" placeholder="Enter Last Name" required ref={(input) => this.getLastname = input}/>
                    <div className="country-selection">
                        <label htmlFor="">Select your country</label>
                        <select ref={(input) => this.getCountry = input} required>
                            <option value=""></option>
                            <option value="Perú">Perú</option>
                            <option value="EEUU">EEUU</option>
                            <option value="England">England</option>
                            <option value="Brasil">Brasil</option>
                        </select>
                    </div>
                    <button className="save">Submit</button>
                </form>
            </div>
        )
    }
}

UserForm.propTypes = {

}

export default connect()(UserForm)