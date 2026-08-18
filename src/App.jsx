import React from 'react';
import UserComponents from './components/UserComponents';
import { Provider } from 'react-redux';
import store from './redux/store';

const App = () => {
  return (
    <Provider store={store}>
    <div>
      <UserComponents/>
    </div>
    </Provider>
  );
};

export default App;