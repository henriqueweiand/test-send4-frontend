import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import Edificio from '~/components/Edificio';
import { Creators as SceneActions } from '~/store/ducks/scene';

import { Container } from './styles';

function Scene() {
  const sceneData = useSelector(state => state.scene);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(SceneActions.requestGeolocation());
    // dispatch(SceneActions.requestScene({ latitude: 11, logitude: 22 }));
  }, []);

  return (
    <Container sol={false}>
      <Edificio />
    </Container>
  );
}

export default Scene;
