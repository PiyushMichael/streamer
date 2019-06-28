import React from 'react';
import {Field, reduxForm} from 'redux-form';
import {Link} from 'react-router-dom';

class CreateStream extends React.Component{
	render(){
		return (
		<div>
			page to create new stream
			<form>
				<Field name="title" />
				<Field name="description" />
			</form>
		</div>);
	}
}

export default reduxForm({form: 'streamCreate'})(CreateStream);