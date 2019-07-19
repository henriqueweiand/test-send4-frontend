import { call, put } from 'redux-saga/effects';
import moment from 'moment';

import { api, getUserLocation } from '~/services/api';
import { Creators as SceneActions } from '~/store/ducks/scene';

export function* getGeoData() {
  try {
    const location = yield call(getUserLocation);
    const { latitude, longitude } = location.coords;

    yield put(SceneActions.requestGeolocationSuccess({ latitude, longitude }));
  } catch (e) {
    yield put(SceneActions.requestError('Não foi possivel obter a sua Geo Localização'));
  }
}

export function* getSceneState(action) {
  try {
    const { latitude, longitude } = action.payload;
    const response = yield call(api.get, '', { params: { lat: latitude, lng: longitude } });
    const { sunset, sunrise } = response.data.results;

    const amanhecer = yield moment(sunrise, 'LTS').toDate();
    const pordosol = yield moment(sunset, 'LTS').toDate();
    const atual = yield new Date();

    yield put(SceneActions.requestSceneSuccess({
      ...response.data.results,
      status: (atual > amanhecer && atual < pordosol ? 'day' : 'night'),
      // status: 'night', // force para testar outros estado
    }));
  } catch (e) {
    yield put(SceneActions.requestError('Não foi possivel obter o estado do dia pela API'));
  }
}
