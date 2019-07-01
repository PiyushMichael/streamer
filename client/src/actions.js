import streams from './api/streams-api';
import history from './history';

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
	const user = 1234;
	const response = await streams.post('/streams',{...formValues,user});
	dispatch({type: 'CREATE_STREAM',payload: response.data});
	history.push('/');
};

export const fetchStreams = () => async dispatch => {
	const response = await streams.get('/streams');
	dispatch({type:'FETCH_STREAMS',payload: response.data});
};

export const fetchStream = (id) => async dispatch => {
	const response = await streams.get('/streams/'+id);
	dispatch({type: 'FETCH_STREAM',payload: response.data});
};

export const editStream = (id,formValues) => async dispatch => {
	const response = await streams.patch('/streams/'+id,formValues);
	dispatch({type: 'EDIT_STREAM', payload: response.data});
	history.push('/');
};

export const deleteStream = (id) => async dispatch => {
	await streams.delete('/streams/'+id);
	dispatch({type: 'DELETE_STREAM',payload: id});
};