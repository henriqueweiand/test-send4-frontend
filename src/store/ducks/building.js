import data from '~/edificio.json';

export const Types = {
  TOGGLE_ONE: 'building/TOGGLE_ONE',
  TOGGLE_ALL: 'building/TOGGLE_ALL',
};

const INITIAL_STATE = {
  ...data,
};

export default function building(state = INITIAL_STATE, action) {
  switch (action.type) {
    case Types.TOGGLE_ONE:
      return {
        ...state,
        units: state.units.map(unit => ({
          ...unit,
          lighting: (unit.number === action.payload.unit ? !unit.lighting : unit.lighting),
        })),
      };

    case Types.TOGGLE_ALL:
      return {
        ...state,
        units: state.units.map(unit => ({
          ...unit,
          lighting: action.payload.lighting,
        })),
      };

    default:
      return state;
  }
}

export const Creators = {
  toggleOneLighting: unit => ({ type: Types.TOGGLE_ONE, payload: { unit } }),
  toggleAllLighting: lighting => ({ type: Types.TOGGLE_ALL, payload: { lighting } }),
};
