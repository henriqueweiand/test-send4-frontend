import React, { useState } from 'react';
import { useDispatch } from 'react-redux';

import { Creators as BuildingActions } from '~/store/ducks/building';

import { Container } from './styles';

function Scene() {
  const [lighting, setLighting] = useState(false);
  const dispatch = useDispatch();

  function toogleAllLighting() {
    const newState = !lighting;

    setLighting(newState);
    dispatch(BuildingActions.toggleAllLighting(newState));
  }

  return (
    <Container>
      <button type="button" onClick={toogleAllLighting}>
        { lighting ? 'ligado' : 'desligado' }
      </button>
    </Container>
  );
}

export default Scene;
