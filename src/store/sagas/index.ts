import { fork,all } from 'redux-saga/effects';
import {fetchDeviceInformation} from './DeviceInformationSaga'

export default function* root() {
    yield all([
      fork(fetchDeviceInformation),
    ]);
}