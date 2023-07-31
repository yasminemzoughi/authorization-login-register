import {combineReducers} from 'redux'
import userReducer from './User'
import contactReducer from './contact'


const rootReducer = combineReducers({userReducer, contactReducer})

export default rootReducer;