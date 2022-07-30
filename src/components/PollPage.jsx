import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { connect } from 'react-redux';
import { handleAddAnswer } from '../redux/actions/questions';

const PollPage = (props) => {
  //comment : todo the number of people who voted for that option;
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
    <div className="container">
      <div>
        <h3>Poll By:{author}</h3>
        <img src={avatarURL} alt={author} />
      </div>
      <div>
        <h3>Would You Rather</h3>
        <div>
          <div className={answeredOptionOne ? 'answeredOption' : ''}>
            <p>{optionOne.text}</p>
            <p>{optionOnePercentage.toFixed(2)}%</p>
          </div>
          <button onClick={handleOptionOneClick} disabled={answeredPoll}>
            Click
          </button>
        </div>
        <div>
          <div className={answeredOptionTwo ? 'answeredOption' : ''}>
            <p>{optionTwo.text}</p>
            <p>{optionTwoPercentage.toFixed(2)}%</p>
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
