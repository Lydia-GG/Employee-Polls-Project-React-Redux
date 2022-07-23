import React from 'react';

const NewPollPage = () => {
  return (
    <div className="container">
      <h2>Would You Rather</h2>
      <h3>Create You Own Poll</h3>
      <form>
        <div>
          <h4>First Question</h4>
          <input type="text" placeholder="Question One" />
        </div>
        <div>
          <h4>Second Question</h4>
          <input type="text" placeholder="Question Two" />
        </div>
        <button>Submit</button>
      </form>
    </div>
  );
};

export default NewPollPage;
