import {render} from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import {FlashCard} from '../FlashCard';

describe('FlashCard', () => {
  let answer = 'to draw';
  let question = 'dibujar';
  let context;

  describe('initially ', () => {
    beforeEach(() => {
      context = render(<FlashCard answer={answer} question={question} />);
    });
    it('does not display Correct?', () => {
      const {queryByText} = context;
      expect(queryByText('Correct?')).toBeNull();
    });
    it('does not display the answer', () => {
      const {queryByText} = context;
      expect(queryByText(answer)).toBeNull();
    });
    it('displays the Answer button', () => {
      const {queryByText} = context;
      expect(queryByText('Answer')).not.toBeNull();
    });
  });
  describe('after the ANSWER button is clicked', () => {
    beforeEach(() => {
      context = render(<FlashCard answer={answer} question={question} />);
      const {getByText} = context;
      userEvent.click(getByText('Answer'));
    });
    it('displays Correct?', () => {
      const {queryByText} = context;
      expect(queryByText('Correct?')).not.toBeNull();
    });
    it('displays the answer', () => {
      const {queryByText} = context;
      expect(queryByText(answer)).not.toBeNull();
    });
    it('does not display the Answer button anymore', () => {
      const {queryByText} = context;
      expect(queryByText('Answer')).toBeNull();
    });
    it('displays the Yes button', () => {
      const {queryByText} = context;
      expect(queryByText('Yes')).not.toBeNull();
    });
    it('displays the No button', () => {
      const {queryByText} = context;
      expect(queryByText('No')).not.toBeNull();
    });
  });
});
