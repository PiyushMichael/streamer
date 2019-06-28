import React from 'react';
import {Field, reduxForm} from 'redux-form';
import {Link} from 'react-router-dom';

class CreateStream extends React.Component{
	renderInput(formProps){
		return <input {...formProps.input} />
	};
	render(){
		return (
		<div>
			page to create new stream
			<form>
				<Field name="title" component={this.renderInput}/>
				<Field name="description" component={this.renderInput}/>
			</form>
		</div>);
	}
}

export default reduxForm({form: 'streamCreate'})(CreateStream);