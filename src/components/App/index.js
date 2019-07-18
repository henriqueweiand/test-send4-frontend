import React from 'react';

import GlobalStyle from '~/styles/global';
import Edificio from '~/components/Edificio';

import { Container } from './styles';

function App() {
  return (
    <>
      <GlobalStyle />
      <Container>
        <Edificio />
      </Container>
    </>
  );
}

export default App;
