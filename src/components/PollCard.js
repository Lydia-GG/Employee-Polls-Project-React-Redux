import React from 'react';
import { connect } from 'react-redux';
import { formatDate } from '../util/helpers';
import { Link } from 'react-router-dom';

const PollCard = ({ question }) => {
  return (
    <div className="tweet">
      <div>
        <p>{question.author}</p>
        <p>{formatDate(question.timestamp)}</p>
        <Link to={`/poll/${question.id}`}>Show</Link>
      </div>
    </div>
  );
};

export default connect()(PollCard);
