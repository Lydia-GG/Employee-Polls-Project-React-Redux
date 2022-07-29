// import { saveQuestion, saveQuestionAnswer } from '../../util/api';
import { _saveQuestion, _saveQuestionAnswer } from '../../util/_DATA';
import { userAddQuestion, userAddAnswer } from './users';

export const RECEIVE_QUESTIONS = 'RECEIVE_QUESTIONS';
export const ADD_QUESTION = 'ADD_QUESTION';
export const ADD_ANSWER = 'ADD_ANSWER';

export function receiveQuestions(questions) {
  return {
    type: RECEIVE_QUESTIONS,
    questions,
  };
}

function addQuestion(question) {
  return {
    type: ADD_QUESTION,
    question,
  };
}

function addAnswer({ authedUser, qid, answer }) {
  return {
    type: ADD_ANSWER,
    authedUser,
    qid,
    answer,
  };
}

export function handleAddQuestion(optionOneText, optionTwoText) {
  return (dispatch, getState) => {
    const { authedUser } = getState();
    return _saveQuestion({
      optionOneText,
      optionTwoText,
      author: authedUser.id,
    }).then((question) => {
      dispatch(addQuestion(question));
      dispatch(
        userAddQuestion({ authedUser: authedUser.id, qid: question.id })
      );
    });
  };
}
export function handleAddAnswer({ authedUser, qid, answer }) {
  return (dispatch) => {
    // const { authedUser } = getState();
    return _saveQuestionAnswer({ authedUser, qid, answer }).then(() => {
      dispatch(addAnswer({ authedUser, qid, answer }));
      dispatch(userAddAnswer({ authedUser, qid, answer }));
    });
  };
}
