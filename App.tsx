import React from 'react';
import {Provider} from 'react-redux';
import {Navigations} from './src/navigation/navigation';
import {store} from './src/redux/store';

const App = () => {
  return (
    <Provider store={store}>
      <Navigations />
    </Provider>
  );
};

export default App;
