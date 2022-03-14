import { combineReducers } from "redux";
import meReducers from './Reducers/MeReducers';

export default combineReducers({
    user: meReducers
})