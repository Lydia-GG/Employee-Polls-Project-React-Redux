import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { connect } from 'react-redux';
import { handleLogout } from '../redux/actions/authedUser';

const Nav = (props) => {
  const navigate = useNavigate();

  const logout = () => {
    props.dispatch(handleLogout());
    navigate('/login');
  };
  return (
    <nav className="container nav">
      <div>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/leaderboard">Leaderboard</Link>
          </li>
          <li>
            <Link to="/add">New Poll</Link>
          </li>
        </ul>
      </div>
      <div className="">
        <img
          className="avatar"
          alt={props.authedUser.name}
          src={props.authedUser.avatarURL}
        />
        <button className="log-btn">{props.authedUser.id}</button>
        <button className="log-btn" onClick={logout}>
          logout
        </button>
      </div>
    </nav>
  );
};

const mapStateToProps = ({ authedUser }) => ({
  authedUser,
});

export default connect(mapStateToProps)(Nav);
