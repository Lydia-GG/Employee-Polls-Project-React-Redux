import React from 'react';
import { connect } from 'react-redux';
import PollCard from './PollCard';

const Dashboard = (props) => {
  const answeredQuestions = props.questions.filter(
    (question) =>
      question.optionOne.votes.includes(props.authedUser.id) ||
      question.optionTwo.votes.includes(props.authedUser.id)
  );
  console.log(answeredQuestions);

  const unAnsweredQuestions = props.questions.filter(
    (question) =>
      !question.optionOne.votes.includes(props.authedUser.id) &&
      !question.optionTwo.votes.includes(props.authedUser.id)
  );
  console.log(unAnsweredQuestions);

  return (
    <div className="dashpoard-page center">
      <h1>Polls List</h1>

      <div className="poll-list">
        <h2 className='poll-header'>New Polls</h2>
        <ul>
          {unAnsweredQuestions.map((question) => (
            <li key={question.id}>
              <PollCard question={question} />
            </li>
          ))}
        </ul>
      </div>
      <div className="poll-list">
        <h2 className='poll-header'>Done</h2>
        <ul>
          {answeredQuestions.map((question) => (
            <li key={question.id}>
              <PollCard question={question} />
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

const mapStateToProps = ({ authedUser, questions, users }) => ({
  authedUser,
  questions: Object.values(questions).sort((a, b) => b.timestamp - a.timestamp),
  users,
});

export default connect(mapStateToProps)(Dashboard);
