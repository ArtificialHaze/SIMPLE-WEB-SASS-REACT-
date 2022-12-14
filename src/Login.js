import React from "react";
import "./Login.scss";

const Login = () => {
  return (
    <div className="forms">
      <form className="form" action="#">
        <label htmlFor="email">Email:</label>
        <input type="email" placeholder="Email.." id="email" />
        <label htmlFor="password">Password:</label>
        <input type="password" placeholder="Password.." id="password" />
        <button type="submit">Next</button>
      </form>
    </div>
  );
};

export default Login;
