import { getInitialData } from '../../util/api';
import { receiveQuestions } from './questions';
import { receiveUsers } from './users';
import { authedUserLogin } from './authedUser';

// const AUTHED_ID = 'tylermcginnis';

export function handleInitialData() {
  return (dispatch) => {
    return getInitialData().then(({ users, questions }) => {
      dispatch(receiveUsers(users));
      dispatch(receiveQuestions(questions));
      // dispatch(authedUserLogin(AUTHED_ID));
    });
  };
}
