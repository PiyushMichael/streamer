import streams from './api/streams-api';

export const signIn = (user) => {
	return {
		type: 'SIGN_IN',
		payload: user
	};
};

export const signOut = (user) => {
	return {
		type: 'SIGN_OUT',
		payload: user
	};
};

export const createStream = formValues => async dispatch => {
	streams.post('/streams',formValues);
};