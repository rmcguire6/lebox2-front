import {Provider} from 'react-redux';
import store from './store';
import CardBox from './pages/CardBox/CardBox.js';
const App = () => {
  return (
    <>
      <Provider store={store}>
        <h1>Welcome to the Leitner Box</h1>
        <CardBox loadCards={() => {}} />
      </Provider>
    </>
  );
};

export default App;
