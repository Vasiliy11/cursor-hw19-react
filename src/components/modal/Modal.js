import React, { Component } from 'react';
import './modal.scss';
import {ButtonStyled, DivModal, DivImg, Img }  from './ModalStyledComponent'
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
      isChecked: false
    };
  }
  inputHandler = (e) => {
    const regname = /...+/;
    const regmail = /...+@..+\...+/;
    const regpass = /(?=.*[a-z])(?=.*[A-Z])........+/;
    const target = e.target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const name = target.name;
    (regname.test(value) && (name === 'fname' || name === 'lname')) ||
    (regmail.test(value) && name === 'email') ||
    (regpass.test(value) && name === 'password')
      ? (target.className = 'green')
      : (target.className = 'red');
    this.setState({ [name]: value });
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
      <DivModal className="modal">
        <DivImg>
          <Img src={lock} alt="lock" />
        </DivImg>
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
            <ButtonStyled>Forgot password?</ButtonStyled>
          ) : null}
          <ButtonStyled onClick={this.handleToggleValue}>
            {this.state.toggleValue}
          </ButtonStyled>
        </div>
        <p className="copyright">Copyright &copy; Your Website 2021</p>
      </DivModal>
    );
  }
}

export default Modal;
