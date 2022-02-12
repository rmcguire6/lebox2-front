import {Provider} from 'react-redux';

import store from './store';
import CardBox from './pages/CardBox';
import NewCardForm from './components/NewCardForm';

const App = () => {
  return (
    <>
      <Provider store={store}>
        <h1>Welcome to the Leitner Box</h1>
        <CardBox />
        <NewCardForm />
      </Provider>
    </>
  );
};

export default App;
