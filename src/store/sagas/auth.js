import { call, put } from 'redux-saga/effects';

import { getSunriseSunset } from '~/services/api';
import { Creators as AuthActions } from '~/store/ducks/auth';

export function* postAuth(action) {
  try {
    // const { email, password } = action.payload;
    // const response = yield call(api.post, 'sessions', { email, password });
    const response = yield call(getSunriseSunset);

    yield put(AuthActions.postAuthSuccess(response.data.token));
  } catch (err) {
    yield put(AuthActions.requestError());
  }
}
