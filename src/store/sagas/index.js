import { all, takeLatest } from 'redux-saga/effects';

import { Types as SceneTypes } from '../ducks/scene';
import { getSceneState, getGeoData } from './scene';

export default function* rootSaga() {
  yield all([
    takeLatest(SceneTypes.GET_INFOS, getSceneState),
    takeLatest(SceneTypes.GET_GEOLOCATION, getGeoData),
  ]);
}
