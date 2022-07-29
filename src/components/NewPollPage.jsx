import React, { useState } from 'react';
import { connect } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { handleAddQuestion } from '../redux/actions/questions';

const NewPollPage = ({ dispatch }) => {
  // console.log(authedUser);
  const [optionOne, setOptionOne] = useState('');
  const [optionTwo, setOptionTwo] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(handleAddQuestion(optionOne, optionTwo));
    navigate('/');
  };
  return (
    <div className="container">
      <h2>Would You Rather</h2>
      <h3>Create You Own Poll</h3>
      <form>
        <div>
          <h4>First Question</h4>
          <input
            type="text"
            placeholder="Question One"
            value={optionOne}
            onChange={(e) => setOptionOne(e.target.value)}
          />
        </div>
        <div>
          <h4>Second Question</h4>
          <input
            type="text"
            placeholder="Question Two"
            value={optionTwo}
            onChange={(e) => setOptionTwo(e.target.value)}
          />
        </div>
        <button onClick={handleSubmit}>Submit</button>
      </form>
    </div>
  );
};

export default connect()(NewPollPage);
