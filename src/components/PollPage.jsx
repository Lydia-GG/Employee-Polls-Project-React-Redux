import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { connect } from 'react-redux';
import { handleAddAnswer } from '../redux/actions/questions';

const PollPage = (props) => {
  const navigate = useNavigate();
  const { avatarURL } = props.user;
  const { author, optionOne, optionTwo, id } = props.question;

  const answeredOptionOne = optionOne.votes.includes(props.authedUser);
  const answeredOptionTwo = optionTwo.votes.includes(props.authedUser);
  const answeredPoll = answeredOptionOne || answeredOptionTwo;

  // percentage
  const optionOneTotalVotes = optionOne.votes.length;
  const optionTwoTotalVotes = optionTwo.votes.length;
  const totalVotes = optionOneTotalVotes + optionTwoTotalVotes;

  const optionOnePercentage = (optionOneTotalVotes / totalVotes) * 100;
  const optionTwoPercentage = (optionTwoTotalVotes / totalVotes) * 100;

  const handleOptionOneClick = (e) => {
    e.preventDefault();

    props.dispatch(handleAddAnswer(id, 'optionOne'));

    navigate('/');
  };
  const handleOptionTwoClick = (e) => {
    e.preventDefault();
    props.dispatch(handleAddAnswer(id, 'optionTwo'));
    navigate('/');
  };

  return (
    <div className="poll-page container">
      <div>
        <h2>Poll by: {author}</h2>
        <img src={avatarURL} alt={author} />
      </div>
      <h3>Would You Rather</h3>
      <div className="info">
        <div className="info-element">
          <div className={answeredOptionOne ? 'answeredOption' : ''}>
            <p className="sector">{optionOne.text}</p>
            {totalVotes > 0 && (
              <p className="percentage">
                <span className="votes">
                  Votes: {optionOne.votes.length}/{totalVotes}{' '}
                </span>
                {optionOnePercentage.toFixed(2)}%{' '}
              </p>
            )}
          </div>
          <button onClick={handleOptionOneClick} disabled={answeredPoll}>
            Click
          </button>
        </div>
        <div className="info-element">
          <div className={answeredOptionTwo ? 'answeredOption' : ''}>
            <p className="sector">{optionTwo.text}</p>
            {totalVotes > 0 && (
              <p className="percentage">
                <span className="votes">
                  Votes: {optionTwoTotalVotes}/{totalVotes}{' '}
                </span>
                {optionTwoPercentage.toFixed(2)}%
              </p>
            )}
          </div>
          <button onClick={handleOptionTwoClick} disabled={answeredPoll}>
            Click
          </button>
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = ({ authedUser, questions, users }) => {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const { id } = useParams();
  const question = questions[id];
  const user = Object.values(users).find((user) => user.id === question.author);
  return {
    authedUser: authedUser.id,
    question,
    user,
  };
};

export default connect(mapStateToProps)(PollPage);
