import React from 'react';
import '../modal/modal.scss';
import { FormButton } from '../modal/ModalStyledComponent'

const Login = (props) => {
  return (
    <div className="login">
      <form>
        <input
          type="email"
          placeholder="Пошта"
          name="email"
          value={props.email}
          onChange={props.inputHandler}
        />
        <input
          type="password"
          placeholder="Пароль"
          name="password"
          value={props.password}
          onChange={props.inputHandler}
        />
        <input
          type="checkbox"
          className="checkbox"
          id="checkbox"
          name="isChecked"
          onChange={props.inputHandler}
        />
        <label htmlFor="checkbox">Remember me</label>
        <FormButton type="submit" value="Sign in" />
      </form>
    </div>
  );
};

export default Login;
