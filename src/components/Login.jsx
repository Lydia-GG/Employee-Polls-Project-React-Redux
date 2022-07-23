import React from 'react';

const Login = () => {
  return (
    <div>
      <img className="poll-image" />
      <form className="login-form">
        <input type="text" placeholder="username" className="login-input" />
        <input type="password" placeholder="password" className="login-input" />
        <button className="login-btn center">Login</button>
      </form>
    </div>
  );
};

export default Login;
