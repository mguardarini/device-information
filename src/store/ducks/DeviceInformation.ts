import { createReducer, createActions } from 'reduxsauce'

const INITIAL_STATE = {
    data: [],
    loading: false,
    error: false,
};
//Actions and Types
const { Types, Creators } = createActions({
  fetchInfo:[],
  fetchDeviceInformation: null,
  fetchDeviceInformationSuccess: ['device'],
  fetchDeviceInformationFailure: ['errorMessage'],
})
export const deviceInformationTypes = Types
export const deviceInformationActions = Creators

//Reducers
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
export const fetchDeviceInformationFailure = (state,{device}) => ({
    ...state,
    data: device, 
    loading: false, 
    error: true
})
export const deviceInformationReducer = createReducer(INITIAL_STATE, {
    [Types.FETCH_DEVICE_INFORMATION]: fetchDeviceInformation,
    [Types.FETCH_DEVICE_INFORMATION_SUCCESS]: fetchDeviceInformationSuccess,
    [Types.FETCH_DEVICE_INFORMATION_FAILURE]:fetchDeviceInformationFailure
})  