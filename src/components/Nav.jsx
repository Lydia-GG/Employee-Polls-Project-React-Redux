import React from 'react';
import { Link } from 'react-router-dom';

const Nav = () => {
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
        <img className="avatar" alt="image" src="" />
        <button className="log-btn">username</button>
        <button className="log-btn">logout</button>
      </div>
    </nav>
  );
};

export default Nav;
