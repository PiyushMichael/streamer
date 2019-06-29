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
	const response = await streams.post('/streams',formValues);
	dispatch({type: 'CREATE_STREAM',payload: response.data});
};