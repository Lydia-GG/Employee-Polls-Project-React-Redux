import React from 'react';
import { connect } from 'react-redux';

const Leaderboard = (props) => {
  console.log(props.totalActs);

  return (
    <div className="container leaderboard padding-top">
      <table>
        <thead>
          <tr>
            <th>Users</th>
            <th>Answered</th>
            <th>Created</th>
            <th>Total</th>
          </tr>
        </thead>
        {props.totalActs.map((user) => (
          <tbody key={user.id}>
            <tr>
              <td className="table-user">
                <img
                  src={user.avatarURL}
                  alt={user.name}
                  className="user-photo"
                />
                <span className="table-userName"> {user.name} </span>
                <span className="table-userId"> {user.id} </span>
              </td>
              <td>{Object.keys(user.answers).length}</td>
              <td>{Object.keys(user.questions).length}</td>
              <td>
                {Object.keys(user.answers).length +
                  Object.keys(user.questions).length}
              </td>
            </tr>
          </tbody>
        ))}
      </table>
    </div>
  );
};

const mapStateToProps = ({ users }) => {
  const totalActs = Object.values(users).sort(
    (a, b) =>
      Object.keys(b.answers).length +
      Object.keys(b.questions).length -
      (Object.keys(a.answers).length + Object.keys(a.questions).length)
  );

  return {
    // users: Object.values(users).sort((a,b)=> (a.answers.length + a.questions.length) - (b.answers.length + b.questions.length)),
    users: Object.values(users),
    totalActs,
  };
};

export default connect(mapStateToProps)(Leaderboard);
