import { reducer as deviceInfoReducer } from './reducer'
import {combineReducers} from 'redux'

const rootReducer = combineReducers({
   device: deviceInfoReducer
})

export default rootReducer