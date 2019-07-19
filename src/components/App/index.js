import React from 'react';
import '~/config/reactotron';

import { Provider } from 'react-redux';
import GlobalStyle from '~/styles/global';
import Scene from '~/components/Scene';
import store from '~/store';

function App() {
  return (
    <Provider store={store}>
      <GlobalStyle />
      <Scene />
    </Provider>
  );
}

export default App;
