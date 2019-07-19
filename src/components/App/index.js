import React, { useState, useEffect } from 'react';
import '~/config/reactotron';

import { Provider } from 'react-redux';
import GlobalStyle from '~/styles/global';
import Edificio from '~/components/Edificio';
import { store } from '~/store';

import { Container } from './styles';

function App() {
  const [sol, setSol] = useState();

  useEffect(() => {
    setTimeout(() => {
      console.log('aq');
      setSol(true);
    }, 2000);

    setTimeout(() => {
      console.log('aq');
      setSol(false);
    }, 4000);
  }, []);

  return (
    <Provider store={store}>
      <GlobalStyle />
      <Container sol={sol}>
        <Edificio />
      </Container>
    </Provider>
  );
}

export default App;
