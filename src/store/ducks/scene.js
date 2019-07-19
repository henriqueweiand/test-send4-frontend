export const Types = {
  GET_INFOS: 'scene/GET_INFOS',
  GET_INFOS_SUCCESS: 'scene/GET_INFOS_SUCCESS',
  GET_GEOLOCATION: 'scene/GET_GEOLOCATION',
  GET_GEOLOCATION_SUCCESS: 'scene/GET_GEOLOCATION_SUCCESS',
  ERROR: 'scene/ERROR',
};

const INITIAL_STATE = {
  sun: {},
  coords: {},
  message: '',
};

export default function scene(state = INITIAL_STATE, action) {
  console.log(action.type);
  switch (action.type) {
    case Types.GET_INFOS:
      return { ...state, message: '' };
    case Types.GET_INFOS_SUCCESS:
      return { ...state, sun: action.payload.data, message: '' };
    case Types.GET_GEOLOCATION_SUCCESS:
      console.log('reducer', action);

      return { ...state, coords: action.payload.data, message: '' };
    case Types.ERROR:
      return { ...state, message: action.payload.message };
    default:
      return state;
  }
}

export const Creators = {
  requestGeolocation: () => ({ type: Types.GET_GEOLOCATION }),
  requestGeolocationSuccess: data => ({
    type: Types.GET_GEOLOCATION_SUCCESS,
    payload: data,
  }),
  requestScene: ({ latitude, logitude }) => ({
    type: Types.GET_INFOS,
    payload: {
      latitude,
      logitude,
    },
  }),
  requestSceneSuccess: data => ({
    type: Types.GET_INFOS_SUCCESS,
    payload: data,
  }),
  requestError: message => ({ type: Types.ERROR, payload: { message } }),
};
