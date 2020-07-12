import { deviceInformationReducer } from './DeviceInformation'
import {combineReducers} from 'redux'

const rootReducer = combineReducers({
   device: deviceInformationReducer
})

export default rootReducer