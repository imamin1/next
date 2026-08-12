import React from 'react';
import { Provider } from 'react-redux';
import MyStore from './components/MyStore';
import store from './redux/store';

const App = () => {
  return (
    <Provider store={store}>
      <div>
        <MyStore />
      </div>
    </Provider>
  );
};

export default App;