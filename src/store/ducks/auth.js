export const Types = {
  POST: 'auth/POST',
  POST_SUCCESS: 'auth/POST_SUCCESS',
  ERROR: 'auth/ERROR',
};

const INITIAL_STATE = {
  data: {},
  token: false,
  message: '',
};

export default function auth(state = INITIAL_STATE, action) {
  switch (action.type) {
    case Types.POST:
      return { ...state };
    case Types.POST_SUCCESS:
      return {
        ...state, message: '', data: action.payload.data, token: action.payload.token,
      };
    case Types.ERROR:
      return { ...state, data: {}, message: action.payload.message };
    default:
      return state;
  }
}

export const Creators = {
  postAuth: (email, password) => ({
    type: Types.POST,
    payload: {
      email,
      password,
    },
  }),
  postAuthSuccess: (data, token) => ({ type: Types.SUCCESS, payload: { data, token } }),
  requestError: message => ({ type: Types.ERROR, payload: { message } }),
};
