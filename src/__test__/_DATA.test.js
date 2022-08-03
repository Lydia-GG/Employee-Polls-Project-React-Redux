import { _saveQuestion, _saveQuestionAnswer } from '../util/_DATA';

//At least one test must call the toMatchSnapshot() function from jest. Doing this will generate a folder called snapshots where the snapshot will be stored.

//At least one unit test must use the render method from @testing-library/react to render one of your React components. The unit test should then perform some actions on the component using fireEvent such as fireEvent.click() or fireEvent.change(). After calling fireEvent, call the expect() method from jest to verify that a change occurred in the UI after the event was fired.

describe('Data', () => {
  describe('_saveQuestion', () => {
    it('verify that the saved question is returned and all expected fields', async () => {
      const question = {
        optionOneText: 'Sleep',
        optionTwoText: 'Travel',
        author: 'tylermcginnis',
      };
      const result = await _saveQuestion(question);

      expect(result).toBeTruthy();
      expect(result).toMatchObject({
        author: 'tylermcginnis',
        optionOne: { votes: [], text: 'Sleep' },
        optionTwo: { votes: [], text: 'Travel' },
      });
    });
    it('verify that an error is returned if incorrect data is passed', async () => {
      const question = {
        optionOneText: 'Sleep',
        author: 'tylermcginnis',
      };

      await expect(_saveQuestion(question)).rejects.toEqual(
        'Please provide all fields'
      );
    });
  });

  describe('_saveQuestionAnswer', () => {
    it('return true  when correctly formatted data is passed', async () => {
      const answer = {
        authedUser: 'tylermcginnis',
        qid: 'am8ehyc8byjqgar0jgpub9',
        answer: 'optionOne',
      };

      await expect(_saveQuestionAnswer(answer)).toBeTruthy();
    });

    it('return error if incorrect data is passed', async () => {
      const answer = {
        authedUser: 'tylermcginnis',
        answer: 'optionOne',
      };

      await expect(_saveQuestionAnswer(answer)).rejects.toEqual(
        'Please provide all fields'
      );
    });
  });
});
