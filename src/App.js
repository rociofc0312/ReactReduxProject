import React, { Component } from 'react';
import './App.css';
import UserForm from './Components/UserForm/UserForm';
import AllUsers from './Components/AllUsers/AllUsers';
class App extends Component {
  render() {
    return (
      <div className="App">
        <UserForm/>
        <AllUsers/>
      </div>
    );
  }
}

export default App;
