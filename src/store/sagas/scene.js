import { call, put } from 'redux-saga/effects';
// import moment from 'moment';

import { api, getUserLocation } from '~/services/api';
import { Creators as SceneActions } from '~/store/ducks/scene';

export function* getGeoData() {
  try {
    const location = yield call(getUserLocation);
    const { coords } = location;

    console.log('getGeoData', coords);
    yield put(SceneActions.requestGeolocationSuccess(coords));
  } catch (e) {
    yield put(SceneActions.requestError('Não foi possivel obter a sua Geo Localização'));
  }
}

export function* getSceneState(action) {
  try {
    const { latitude, logitude } = action.payload;
    const response = yield call(api.get, '?', { lat: latitude, lng: logitude });

    // const amanhecer = moment(sunrise.results.sunrise, 'LTS').toDate();
    // const pordosol = moment(sunrise.results.sunset, 'LTS').toDate();
    // const atual = new Date();

    // if (
    //   atual > amanhecer && atual < pordosol
    // ) {
    //   console.log('dia');
    // } else {
    //   console.log('noite');
    // }

    yield put(SceneActions.requestSceneSuccess(response.data));
  } catch (err) {
    yield put(SceneActions.requestError('Não foi possivel obter o estado do dia pela API'));
  }
}
