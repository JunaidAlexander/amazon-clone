import React, { useState, useReducer, useEffect } from "react";
import { Link } from "react-router-dom";
import "./Login.css";
import { useContext } from "react";
import AuthContext from "../Context/authContext";

const reducer = (state, action) => {
  if (action.type === "EMAIL_INPUT") {
    return {
      ...state,
      emailValue: action.payload
    };
  }

  if (action.type === "PASS_INPUT") {
    return {
      ...state,
      passwordValue: action.payload
    };
  }

  if (action.type === "FORM_VALIDITY") {
    return {
      ...state,
      formIsValid: action.payload
    };
  }

  return state;
};

const initialState = {
  emailValue: "",
  passwordValue: "",
  formIsValid: false
};

const Login = ({ onLogin }) => {
  const cxt = useContext(AuthContext);
  const [state, dispatch] = useReducer(reducer, initialState);

  const { emailValue: email, passwordValue: password, formIsValid } = state;

  useEffect(
    () => {
      const identifier = setTimeout(() => {
        console.log("Checking form validity!");
        dispatch({
          type: "FORM_VALIDITY",
          payload: email && email.includes("@") && password.trim().length > 6
        });
      }, 500);

      return () => {
        clearTimeout(identifier);
      };
    },
    [email, password]
  );

  const emailChangeHandler = event => {
    dispatch({ type: "EMAIL_INPUT", payload: event.target.value });
  };

  const passwordChangeHandler = event => {
    dispatch({ type: "PASS_INPUT", payload: event.target.value });
  };

  const signIn = e => {
    e.preventDefault();
    console.log("Entered Email:", email);
    console.log("Entered Password:", password);
    cxt?.onLogin(state.emailValue, state.passwordValue);
  };

  return (
    <div className="login">
      <Link to="/">
        <img src="" alt="" />
      </Link>
      <div className="Login__container">
        <h1>Sign In</h1>
        <form>
          <h5>E-mail</h5>
          <input
            type="text"
            value={state.emailValue}
            onChange={emailChangeHandler}
          />

          <h5>Password</h5>
          <input
            type="password"
            value={state.passwordValue}
            onChange={passwordChangeHandler}
          />

          <button
            type="submit"
            className="login__signInButton"
            onClick={signIn}
            disabled={!formIsValid}
          >
            Sign In
          </button>
        </form>

        <p>
          By signing-in you agree to the COMPANY NAME Conditions of Use &amp;
          Sale. Please see our Privacy Notice, our Cookies Notice and our
          Interest-Based Ads Notice.
        </p>
        <button className="login__registerButton">Create your Account</button>
      </div>
    </div>
  );
};

export default Login;
