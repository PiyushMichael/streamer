import {combineReducers} from 'redux';
import {reducer as formReducer} from 'redux-form';

const INITIAL_STATE = {isSignedIn: null};

const authReducer = (state = INITIAL_STATE,action) => {
	switch (action.type){
		case 'SIGN_IN':
			return {...state, isSignedIn: true}
		case 'SIGN_OUT':
			return {...state, isSignedIn: false}
		default: return state;
	}
};

export default combineReducers({
	auth: authReducer,
	form: formReducer
});	