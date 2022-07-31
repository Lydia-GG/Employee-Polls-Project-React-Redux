import React, { useState } from 'react';
import { connect } from 'react-redux';
import { handleLogin } from '../redux/actions/authedUser';
import { useNavigate } from 'react-router-dom';
import login from '../assets/login.png';

const Login = (props) => {
  const navigate = useNavigate();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    props.dispatch(handleLogin(username, password));
    navigate('/');
  };

  return (
    <div>
      <h2>Employee Polls</h2>
      <img className="poll-image" src={login} alt="login" />
      <form className="login-form" onSubmit={handleSubmit}>
        <h3>Log In</h3>
        <label>User</label>
        <input
          type="text"
          placeholder="username"
          className="login-input"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <label>Password</label>
        <input
          type="password"
          placeholder="password"
          className="login-input"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button className="login-btn" type="submit">
          Login
        </button>
      </form>
      <div className="notes">
        <p>You can use:</p>
        <p>username: tylermcginnis</p>
        <p>password: 123456</p>
      </div>
    </div>
  );
};

const mapStateToProps = ({ authedUser }) => ({
  authedUser,
});
export default connect(mapStateToProps)(Login);
