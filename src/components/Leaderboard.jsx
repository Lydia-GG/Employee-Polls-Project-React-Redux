import React from 'react';
import { connect } from 'react-redux';

const Leaderboard = (props) => {
  console.log(props.users);
  
  return (
    <div className='container leaderboard padding-top'>
      <table>
        <thead>
          <tr>
            <th>Users</th>
            <th>Answered</th>
            <th>Created</th>
            <th>Total</th>
          </tr>
        </thead>
        {props.users.map((user) => (
          <tbody key={user.id}>
            <tr>
              <td className='table-user'>
                <img src={user.avatarURL} alt={user.name} className='user-photo' /> 
                <span className='table-userName'> {user.name} </span>
                <span className='table-userId'> {user.id} </span>
              </td>
              <td>{Object.keys(user.answers).length}</td>
              <td>{Object.keys(user.questions).length}</td>
              <td>{Object.keys(user.answers).length + Object.keys(user.questions).length}</td>
            </tr>
          </tbody>
        ))}
      </table>
    </div>
  );
};

const mapStateToProps = ({ users }) => {
  return {
    // users: Object.values(users).sort((a,b)=> (a.answers.length + a.questions.length) - (b.answers.length + b.questions.length)),
    users: Object.values(users)
  };
};

export default connect(mapStateToProps)(Leaderboard);
