import {render, act} from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import flushPromises from 'flush-promises';
import {NewCardForm} from '../NewCardForm';

describe('NewCardForm', () => {
  const question = 'hablar';

  let createCard;
  let context;

  beforeEach(() => {
    createCard = jest.fn().mockName('createCard');
    context = render(<NewCardForm createCard={createCard} />);
  });

  describe('when filled in', () => {
    beforeEach(async () => {
      createCard.mockResolvedValue();
      const {getByPlaceholderText, getByTestId} = context;

      await userEvent.type(getByPlaceholderText('Add a Card'), question);
      userEvent.click(getByTestId('new-card-submit-button'));
      return act(flushPromises);
    });

    it('calls createCard with the question', () => {
      expect(createCard).toHaveBeenCalledWith(question);
    });
    it('clears the name', () => {
      const {getByPlaceholderText} = context;
      expect(getByPlaceholderText('Add a Card').value).toEqual('');
    });
  });
});
