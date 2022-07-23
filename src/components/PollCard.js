import React from 'react';
import { connect } from 'react-redux';
import { formatDate } from '../util/helpers';

const PollCard = ({ question }) => {
  return (
    <div className="tweet">
      <div>
        <p>{question.author}</p>
        <p>{formatDate(question.timestamp)}</p>
        <button>Show</button>
      </div>
    </div>
  );
};

export default connect()(PollCard);
