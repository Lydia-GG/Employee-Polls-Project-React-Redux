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
    <div className="center">
      <h3>polls list</h3>

      <div className="poll-list">
        <h4>New Polls</h4>
        <ul>
          {unAnsweredQuestions.map((question) => (
            <li key={question.id}>
              <PollCard question={question} />
            </li>
          ))}
        </ul>
      </div>
      <div className="poll-list">
        <h4>Done</h4>
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
