import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

const Nav = (props) => {
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
            <Link to="/new">New Poll</Link>
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
        <button className="log-btn">logout</button>
      </div>
    </nav>
  );
};

const mapStateToProps = ({ authedUser }) => ({
  authedUser,
});

export default connect(mapStateToProps)(Nav);
