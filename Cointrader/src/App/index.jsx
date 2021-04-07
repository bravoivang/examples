import React from 'react';
import { Provider } from 'react-redux';
import store from './store';
import Screen from '../Components/Screen/index';
import TraderContainer from '../Containers/Trader/';


function App() {
  return (
    <Provider store={store}>
      <Screen>
        <TraderContainer/>
      </Screen>
    </Provider>
  );
}

export default App;
