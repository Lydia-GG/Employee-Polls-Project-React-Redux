import React from 'react';
import { connect } from 'react-redux';

const Leaderboard = (props) => {
  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>Users</th>
            <th>Answered</th>
            <th>Created</th>
          </tr>
        </thead>
        {props.users.map((user) => (
          <tbody key={user.id}>
            <tr>
              <td>{user.id}</td>
              <td>{Object.keys(user.answers).length}</td>
              <td>{Object.keys(user.questions).length}</td>
            </tr>
          </tbody>
        ))}
      </table>
    </div>
  );
};

const mapStateToProps = ({ users }) => {
  return {
    users: Object.values(users).sort(),
  };
};

export default connect(mapStateToProps)(Leaderboard);
