import {render, act} from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import flushPromises from 'flush-promises';
import {NewCardForm} from '../NewCardForm';

describe('NewCardForm', () => {
  const question = 'hablar';
  const answer = 'to speak';
  const requiredError = 'Question and answer are required';
  const serverError = 'The card could not be saved. Please try again.';
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
    it('does not display a server error', () => {
      const {queryByText} = context;
      expect(queryByText(serverError)).toBeNull();
    });
  });
  describe('when filled in', () => {
    beforeEach(async () => {
      createCard.mockResolvedValue();
      const {getByPlaceholderText, getByTestId} = context;

      await userEvent.type(getByPlaceholderText('Add a Question'), question);
      await userEvent.type(getByPlaceholderText('Add an Answer'), answer);
      userEvent.click(getByTestId('new-card-submit-button'));
      return act(flushPromises);
    });

    it('calls createCard with the question, answer', () => {
      expect(createCard).toHaveBeenCalledWith(question, answer);
    });
    it('clears the question', () => {
      const {getByPlaceholderText} = context;
      expect(getByPlaceholderText('Add a Question').value).toEqual('');
    });
    it('clears the answer', () => {
      const {getByPlaceholderText} = context;
      expect(getByPlaceholderText('Add an Answer').value).toEqual('');
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
      await userEvent.type(getByPlaceholderText('Add a Question'), '');
      await userEvent.type(getByPlaceholderText('Add an Answer'), '');
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
      await userEvent.type(getByPlaceholderText('Add a Question'), '');
      await userEvent.type(getByPlaceholderText('Add an Answer'), '');
      userEvent.click(getByTestId('new-card-submit-button'));
      await act(flushPromises);
      await userEvent.type(getByPlaceholderText('Add a Question'), question);
      await userEvent.type(getByPlaceholderText('Add an Answer'), answer);
      userEvent.click(getByTestId('new-card-submit-button'));
      return act(flushPromises);
    });

    it('clears the validation error', () => {
      const {queryByText} = context;
      expect(queryByText(requiredError)).toBeNull();
    });
  });
  describe('when the store action rejects', () => {
    beforeEach(async () => {
      createCard.mockRejectedValue();

      const {getByPlaceholderText, getByTestId} = context;

      await userEvent.type(getByPlaceholderText('Add a Question'), question);
      await userEvent.type(getByPlaceholderText('Add an Answer'), answer);
      userEvent.click(getByTestId('new-card-submit-button'));

      return act(flushPromises);
    });

    it('displays a server error', () => {
      const {queryByText} = context;
      expect(queryByText(serverError)).not.toBeNull();
    });
    it('does not clear the name', () => {
      const {getByPlaceholderText} = context;
      expect(getByPlaceholderText('Add a Question').value).toEqual(question);
      expect(getByPlaceholderText('Add an Answer').value).toEqual(answer);
    });
  });
  describe('when retrying after a server error', () => {
    beforeEach(async () => {
      createCard.mockRejectedValueOnce().mockResolvedValueOnce();

      const {getByPlaceholderText, getByTestId} = context;
      await userEvent.type(getByPlaceholderText('Add a Question'), question);
      await userEvent.type(getByPlaceholderText('Add an Answer'), answer);
      userEvent.click(getByTestId('new-card-submit-button'));
      await act(flushPromises);
      userEvent.click(getByTestId('new-card-submit-button'));
      return act(flushPromises);
    });

    it('clears the server error', () => {
      const {queryByText} = context;
      expect(queryByText(serverError)).toBeNull();
    });
  });
});
