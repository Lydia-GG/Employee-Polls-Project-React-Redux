import React from 'react';
import { connect } from 'react-redux';
import PollCard from './PollCard';

const Dashboard = (props) => {
  console.log(props);

  return (
    <div className="center">
      <h3>polls list</h3>
      <ul>
        {props.questions.map((question) => (
          <li key={question.id}>
            <PollCard question={question} />
          </li>
        ))}
      </ul>
    </div>
  );
};

const mapStateToProps = ({ authedUser, questions, users }) => ({
  authedUser,
  questions: Object.values(questions).sort((a, b) => b.timestamp - a.timestamp),
  users,
});

export default connect(mapStateToProps)(Dashboard);
