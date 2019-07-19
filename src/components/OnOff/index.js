import React, { useState } from 'react';
import { useDispatch } from 'react-redux';

import { Creators as BuildingActions } from '~/store/ducks/building';

import { Container, Button, Label } from './styles';

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
      <Button type="button" onClick={toogleAllLighting}>
        <Label>
          Disjuntor geral
        </Label>
        { lighting ? 'ligado' : 'desligado' }
      </Button>
    </Container>
  );
}

export default Scene;
