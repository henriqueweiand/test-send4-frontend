import React from 'react';
import { useSelector } from 'react-redux';

import Janela from '~/components/Janela';
import { Container } from './styles';

function Edificio() {
  const units = useSelector(state => state.building.units);

  return (
    <Container>
      {
        units.map(janela => <Janela {...janela} key={janela.number} />)
      }
    </Container>
  );
}

export default Edificio;
