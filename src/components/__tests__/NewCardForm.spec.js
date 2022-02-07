import {render, act} from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import flushPromises from 'flush-promises';
import {NewCardForm} from '../NewCardForm';

describe('NewCardForm', () => {
  const question = 'hablar';
  const requiredError = 'Question is required';

  let createCard;
  let context;

  beforeEach(() => {
    createCard = jest.fn().mockName('createCard');
    context = render(<NewCardForm createCard={createCard} />);
  });

  describe('initially', () => {
    it('does not display a validation error', () => {
      const {queryByText} = context;
      expect(queryByText(requiredError)).toBeNull();
    });
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
    it('does not display a validation error', () => {
      const {queryByText} = context;
      expect(queryByText(requiredError)).toBeNull();
    });
  });
  describe('when empty', () => {
    beforeEach(async () => {
      createCard.mockResolvedValue();

      const {getByPlaceholderText, getByTestId} = context;
      await userEvent.type(getByPlaceholderText('Add a Card'), '');
      userEvent.click(getByTestId('new-card-submit-button'));

      return act(flushPromises);
    });

    it('displays a validation error', () => {
      const {queryByText} = context;
      expect(queryByText(requiredError)).not.toBeNull();
    });
    it('does not call createCard', () => {
      expect(createCard).not.toHaveBeenCalled();
    });
  });
  describe('when correcting a validation error', () => {
    beforeEach(async () => {
      createCard.mockResolvedValue();

      const {getByPlaceholderText, getByTestId} = context;
      await userEvent.type(getByPlaceholderText('Add a Card'), '');
      userEvent.click(getByTestId('new-card-submit-button'));
      await act(flushPromises);
      await userEvent.type(getByPlaceholderText('Add a Card'), question);
      userEvent.click(getByTestId('new-card-submit-button'));
      return act(flushPromises);
    });

    it('clears the validation error', () => {
      const {queryByText} = context;
      expect(queryByText(requiredError)).toBeNull();
    });
  });
});
