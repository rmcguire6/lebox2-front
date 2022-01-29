import {render} from '@testing-library/react';
import userEvent from '@testing-library/user-event';
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
      const {getByPlaceholderText, getByTestId} = context;

      await userEvent.type(getByPlaceholderText('Add a Card'), question);
      userEvent.click(getByTestId('new-card-submit-button'));
    });

    it('calls createCard with the question', () => {
      expect(createCard).toHaveBeenCalledWith(question);
    });
  });
});
