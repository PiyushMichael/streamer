import {combineReducers} from 'redux';
import {reducer as formReducer} from 'redux-form';
import _ from 'lodash';

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

const streamReducer = (state = {},action) => {
	switch (action.type){
		case 'FETCH_STREAMS':
			return {...state, ..._.mapKeys(action.payload,'id')};
		case 'FETCH_STREAM':
			return {...state, [action.payload.id]: action.payload};
		case 'CREATE_STREAM':
			return {...state, [action.payload.id]: action.payload};
		case 'EDIT_STREAM':
			return {...state, [action.payload.id]: action.payload};
		case 'DELETE_STREAM':
			return _.omit(state,action.payload);
		default: return state;
	}
};

export default combineReducers({
	auth: authReducer,
	form: formReducer,
	streams: streamReducer
});	