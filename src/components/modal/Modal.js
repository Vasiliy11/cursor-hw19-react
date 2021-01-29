import React, { Component } from 'react';
import './modal.scss';

import Login from '../login/Login';
import Register from '../register/Register';
import lock from '../../lock.svg';

class Modal extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: 'Sign in',
      toggleValue: "Don't have an account? Sign up",
      fname: '',
      lname: '',
      password: '',
      email: '',
      isChecked: false,
    };
  }
  inputHandler = (e) => {
    const target = e.target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const name = target.name;
    this.setState({
      [name]: value,
    });
  };
  saveDataHandler = () => {
    const { fname, lname, email, password } = this.state;
    const user = { fname, lname, email, password };
    localStorage.setItem('user', JSON.stringify(user));
    console.log(user);
  };
  handleToggleValue = (e) => {
    e.preventDefault();
    this.state.toggleValue === "Don't have an account? Sign up"
      ? this.setState({
          value: 'Sign up',
          toggleValue: 'Already have an account? Sign in',
        })
      : this.setState({
          value: 'Sign in',
          toggleValue: "Don't have an account? Sign up",
        });
  };
  render() {
    const { value } = this.state;
    return (
      <div className="modal">
        <div className="img-wrapper">
          <img src={lock} alt="lock" />
        </div>
        <h2>{value}</h2>
        {value === 'Sign up' ? (
          <Register
            saveDataHandler={this.saveDataHandler}
            inputHandler={this.inputHandler}
          />
        ) : (
          <Login inputHandler={this.inputHandler} />
        )}
        <div className="toggle-wrapper">
          {value === 'Sign in' ? (
            <button className="toggle-btn">Forgot password?</button>
          ) : null}
          <button onClick={this.handleToggleValue} className="toggle-btn">
            {this.state.toggleValue}
          </button>
        </div>
        <p className="copyright">Copyright &copy; Your Website 2021</p>
      </div>
    );
  }
}

export default Modal;
