import React from 'react';
import {SafeAreaView} from 'react-native';
import {Provider} from 'react-redux';
import {store} from './src/redux/store';
import {SearchScreen} from './src/screens/search/Search.screen';

const App = () => {
  return (
    <Provider store={store}>
      <SearchScreen />
    </Provider>
  );
};

export default App;
