import React from 'react';

const Nav = () => {
  return (
    <nav className="container nav">
      <div>
        <ul>
          <li>Home</li>
          <li>Leaderboard</li>
          <li>New Poll</li>
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
