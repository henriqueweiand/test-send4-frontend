import React from 'react';
import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';

import { Creators as BuildingActions } from '~/store/ducks/building';
import { Container, Label } from './styles';

const Janela = ({ number, lighting }) => {
  const dispatch = useDispatch();

  function toggleLighting(unit) {
    dispatch(BuildingActions.toggleOneLighting(unit));
  }

  return (

    <Container lighting={lighting} onClick={() => toggleLighting(number)}>
      <Label>
        {number}
      </Label>
    </Container>
  );
};

Janela.propTypes = {
  number: PropTypes.number.isRequired,
  lighting: PropTypes.bool.isRequired,
};

export default Janela;
