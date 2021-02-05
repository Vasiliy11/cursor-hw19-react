import React from 'react';
import '../modal/modal.scss';
import { FormButton } from '../modal/ModalStyledComponent'

const Register = (props) => {
  return (
    <div className="register">
      <form onSubmit={props.saveDataHandler}>
        <div>
          <input
            type="text"
            placeholder="Ім'я"
            name="fname"
            value={props.name}
            onChange={props.inputHandler}
          />
          <input
            type="text"
            placeholder="Прізвище"
            name="lname"
            value={props.surname}
            onChange={props.inputHandler}
          />
        </div>
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
        <label htmlFor="checkbox">
          I want to receive inspiration, marketing promotions and updates via
          emeil
        </label>
        <FormButton type="submit" value="Sign up" />
      </form>
    </div>
  );
};

export default Register;
