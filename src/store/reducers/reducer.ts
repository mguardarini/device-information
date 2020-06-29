import { createReducer } from 'reduxsauce'
import { DeviceTypes } from '../actions/actions'

const INITIAL_STATE = {
    data: [],
    loading: false,
    error: false,
};
  
export const fetchDeviceInformation = (state) => ({
    ...state,
    loading:true
})
export const fetchDeviceInformationSuccess = (state,{device}) => ({
    ...state,
    data: device, 
    loading: false, 
    error: false
})
export const reducer = createReducer(INITIAL_STATE, {
    [DeviceTypes.FETCH_DEVICE_INFORMATION]: fetchDeviceInformation,
    [DeviceTypes.FETCH_DEVICE_INFORMATION_SUCCESS]: fetchDeviceInformationSuccess
})
  