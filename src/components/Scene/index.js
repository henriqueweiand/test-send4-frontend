import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import Edificio from '~/components/Edificio';
import OnOff from '~/components/OnOff';
import { Creators as SceneActions } from '~/store/ducks/scene';

import { Container } from './styles';

function Scene() {
  const scene = useSelector(state => state.scene);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(SceneActions.requestGeolocation());
  }, [dispatch]);

  useEffect(() => {
    const { latitude, longitude } = scene.coords;
    if (latitude !== undefined && longitude !== undefined) {
      dispatch(SceneActions.requestScene({ latitude, longitude }));
    }
  }, [dispatch, scene.coords]);

  return (
    <Container type={scene.sun.status}>
      <Edificio />
      <OnOff />
    </Container>
  );
}

export default Scene;
