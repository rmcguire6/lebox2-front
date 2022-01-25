import {render} from '@testing-library/react';
import {CardBox} from '../CardBox/CardBox';

describe('CardBox', () => {
  it('loads the session cards on first render', () => {
    const loadCards = jest.fn().mockName('loadCards');
    render(<CardBox loadCards={loadCards} />);
    expect(loadCards).toHaveBeenCalled();
  });
});
