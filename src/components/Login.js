import React, { useState } from 'react';
import { connect } from 'react-redux';
import { handleLogin } from '../redux/actions/authedUser';
import { useNavigate } from 'react-router-dom';
import login from '../assets/login.png';
import Button from './Button';
import Input from './Input';

const Login = (props) => {
  console.log(props.location);
  const navigate = useNavigate();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    props.dispatch(handleLogin(username, password));
    navigate(-1);
  };

  return (
    <div>
      <h2>Employee Polls</h2>
      <img className="poll-image" src={login} alt="login" />
      <form className="login-form" onSubmit={handleSubmit}>
        <h3>Log In</h3>
        <label>User</label>

        <Input
          type="text"
          placeholder="username"
          className="login-input"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <label>Password</label>

        <Input
          type="password"
          placeholder="password"
          className="login-input"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <Button
          text="Login"
          onClick={handleSubmit}
          className="login-btn"
          type="submit"
        />
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
