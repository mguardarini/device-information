import { delay } from 'redux-saga';
import { takeEvery, put, call, fork,all } from 'redux-saga/effects';
import {DeviceInfoService} from "../../infrastructure/services/DeviceInfoService"
import DeviceInformationActions,{DeviceTypes} from '../actions/actions'
import * as deviceInfoActions from '../actions'


const getTest = () => {

  console.log("fui chamada kerida.")

  const data = { 
    dataDevice:"test"
  }

  return data;
}

function* fetchDeviceInformation() {
  try {
    console.log("sagaaaa")
    yield put(DeviceInformationActions.fetchDeviceInformation());
    const response = yield call(getTest);
    if(response)
      yield put(DeviceInformationActions.fetchDeviceInformationSuccess(response));
  } catch (err) {
      console.log("Saga: "+err)
  }
}

export default function* root() {
  yield all([
    fork(fetchDeviceInformation),
  ]);
}