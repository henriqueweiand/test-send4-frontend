import React, { useState, useEffect } from 'react';
import moment from 'moment';
import data from '~/edificio.json';
import { getLocation, getSunriseSunset } from '~/services/api';

import Janela from '~/components/Janela';
import { Container } from './styles';

function Edificio() {
  const [units, setUnits] = useState(data.units);

  useEffect(() => {
    (async () => {
      const position = await getLocation();
      const { coords } = position;
      const sunrise = await getSunriseSunset(coords);

      const amanhecer = moment(sunrise.results.sunrise, 'LTS').toDate();
      const pordosol = moment(sunrise.results.sunset, 'LTS').toDate();
      const atual = new Date();

      if (
        atual > amanhecer && atual < pordosol
      ) {
        console.log('dia');
      } else {
        console.log('noite');
      }

      console.log(sunrise);
    })();
  }, []);

  function tootleLighting(number) {
    // debugger;
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
      {/* {data.name} */}
      {
        units.map(janela => <Janela {...janela} onPress={tootleLighting} key={janela.number} />)
      }
    </Container>
  );
}

export default Edificio;
