import React from 'react';
import { useParams } from 'react-router-dom';
import { connect } from 'react-redux';

const PollPage = ({ question, user }) => {
  const { avatarURL } = user;
  const { author, optionOne, optionTwo } = question;
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
          <button>Click</button>
        </div>
        <div>
          <span>{optionTwo.text}</span>
          <button>Click</button>
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = ({ questions, users }) => {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const { id } = useParams();
  const question = questions[id];
  const user = Object.values(users).find((user) => user.id === question.author);
  return {
    question,
    user,
  };
};

export default connect(mapStateToProps)(PollPage);
