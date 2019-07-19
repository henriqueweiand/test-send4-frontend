import React from 'react';
import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';

import { Creators as BuildingActions } from '~/store/ducks/building';
import { Container } from './styles';

const Janela = ({ number, lighting }) => {
  const dispatch = useDispatch();

  function toggleLighting(unit) {
    dispatch(BuildingActions.toggleOneLighting(unit));
  }

  return (

    <Container onClick={() => toggleLighting(number)}>
      {number}
      {' '}
  -
      {' '}
      {lighting ? 'ligado' : 'desligado'}
    </Container>
  );
};

Janela.propTypes = {
  number: PropTypes.number.isRequired,
  lighting: PropTypes.bool.isRequired,
};

export default Janela;
