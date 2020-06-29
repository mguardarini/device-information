import { delay } from 'redux-saga';
import { takeEvery, put, call, fork,all } from 'redux-saga/effects';
import {DeviceInfoService} from "../../infrastructure/services/DeviceInfoService"
import DeviceInformationActions,{DeviceTypes} from '../actions/actions'
import * as deviceInfoActions from '../actions'


function* fetchDeviceInformation() {
  try {
    yield put(DeviceInformationActions.fetchDeviceInformation());
    const response = yield call(DeviceInfoService.info);
    if(response)
      yield put(DeviceInformationActions.fetchDeviceInformationSuccess(response));
  } catch (err) {
      console.log(err)
  }
}

export default function* root() {
  yield all([
    fork(fetchDeviceInformation),
  ]);
}