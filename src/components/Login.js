// import React from 'react';
import { useState, useContext } from "react";
import Password from "../password.json";
import { statecontext } from "../statecontext/Context";

function Login() {
  const { state, dispatch } = useContext(statecontext);

  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  function getName(event) {
    setName(event.target.value);
  }

  function getPassword(event) {
    setPassword(event.target.value);
  }

  function Submit(event) {
    event.preventDefault();
    Password.forEach((value) => {
      if (value.username == name && value.password == password) {
        localStorage.setItem("isLoggedin", true);
        dispatch({
          type: "login",
          payload: { isAuthenticated: true },
        });
      } else {
        setError("Invalid password");
      }
    });
  }

  return (
    <div className="logpage">
      <h3 id="log-h1">LOGIN</h3>
      <form>
        <input
          type="text"
          name="name"
          placeholder="userName"
          onChange={getName}
          required
        ></input>
        <br></br>
        <br></br>
        <input
          type="password"
          name="password"
          placeholder="password"
          onChange={getPassword}
          required
        ></input>
        <p>{error}</p>
        <br></br>
        <pre>name:arun password:807263</pre>
        <br></br>
        <button onClick={Submit}>submit</button>
      </form>
    </div>
  );
}

export default Login;
