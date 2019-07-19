import React, { useState } from 'react';
import data from '~/edificio.json';

import Janela from '~/components/Janela';
import { Container } from './styles';

function Edificio() {
  const [units, setUnits] = useState(data.units);

  function toggleLighting(number) {
    setUnits(
      units.map((currentUnit) => {
        if (currentUnit.number === number) {
          return {
            ...currentUnit,
            lighting: !currentUnit.lighting,
          };
        }
        return currentUnit;
      }),
    );
  }

  return (
    <Container>
      {
        units.map(janela => <Janela {...janela} onPress={toggleLighting} key={janela.number} />)
      }
    </Container>
  );
}

export default Edificio;
