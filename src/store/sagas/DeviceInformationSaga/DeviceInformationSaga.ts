import { delay } from 'redux-saga';
import { put, call } from 'redux-saga/effects';
import {DeviceInfoService} from "../../../infrastructure/services/DeviceInfoService"
import {deviceInformationActions} from '../../ducks/DeviceInformation'
import * as deviceInfoActions from '../actions'

function* fetchDeviceInformation() {
  try {
    yield put(deviceInformationActions.fetchDeviceInformation());
    const response = yield call(DeviceInfoService.info);
    if(response)
      yield put(deviceInformationActions.fetchDeviceInformationSuccess(response));
  } catch (err) {
      console.log(err)
  }
}

export { fetchDeviceInformation }