import { all, takeLatest } from 'redux-saga/effects';

import { Types as AuthTypes } from '../ducks/auth';
import { postAuth } from './auth';

export default function* rootSaga() {
  yield all([
    takeLatest(AuthTypes.POST, postAuth),
  ]);
}
