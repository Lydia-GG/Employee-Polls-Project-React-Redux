import React from 'react';
import { useParams } from 'react-router-dom';
import { connect } from 'react-redux';
import { handleAddAnswer } from '../redux/actions/questions';

const PollPage = (props) => {
  const { avatarURL } = props.user;
  const { author, optionOne, optionTwo, id } = props.question;

  const handleOptionOneClick = (e) => {
    e.preventDefault();

    props.dispatch(handleAddAnswer(id, 'optionOne'));
  };
  const handleOptionTwoClick = (e) => {
    e.preventDefault();
    props.dispatch(handleAddAnswer(id, 'optionTwo'));
  };
  // const answeredPoll = () => {};

  return (
    <div className="container">
      <div>
        <h3>Poll By:{author}</h3>
        <img src={avatarURL} alt={author} />
      </div>
      <div>
        <h3>Would You Rather</h3>
        <div>
          <span>{optionOne.text}</span>
          <button onClick={handleOptionOneClick}>Click</button>
        </div>
        <div>
          <span>{optionTwo.text}</span>
          <button onClick={handleOptionTwoClick}>Click</button>
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
    authedUser,
    question,
    user,
  };
};

export default connect(mapStateToProps)(PollPage);
