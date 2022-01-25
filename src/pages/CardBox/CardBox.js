import {useEffect} from 'react';
import Card from '../../components/Card/Card';
export const CardBox = ({loadCards}) => {
  useEffect(() => {
    loadCards();
  }, [loadCards]);
  return (
    <>
      <h2>Cards</h2>
      <Card />
    </>
  );
};
export default CardBox;
