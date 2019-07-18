import React from 'react';

import { Container } from './styles';

const Janela = ({ number, lighting, onPress }) => (
  <Container onClick={() => onPress(number)}>
    {number}
    {' '}
-
    {' '}
    {lighting ? 'ligado' : 'desligado'}
  </Container>
);

export default Janela;
