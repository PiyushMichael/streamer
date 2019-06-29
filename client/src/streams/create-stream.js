import React from 'react';
import {Field, reduxForm} from 'redux-form';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import {createStream} from '../actions';

class CreateStream extends React.Component{
	renderInput({input,label,meta}){
		let x = null;
		return (<div className="field">
			<label>{label}</label>
			<input {...input} autoComplete="off" />
			{err(meta.error,meta.touched)}
		</div>);
	};
	
	onSubmit = (values) => {
		this.props.createStream(values);
	};
	
	render(){
		return (
		<div>
			page to create new stream
			<form className="ui form error" onSubmit={this.props.handleSubmit(this.onSubmit)}>
				<Field name="title" component={this.renderInput} label="Enter Title: "/>
				<Field name="description" component={this.renderInput} label="Enter Description: "/>
				<button className="ui button primary">Submit</button>
			</form>
		</div>);
	}
}

const err = (error,touched) => {
	if (touched) return <div className="ui error message"><div className="header">{error}</div></div>
	return null;
};

const validate = (formValues) => {
	const errors = {};
	if (!formValues.title) errors.title = "you must enter a title";
	if (!formValues.description) errors.description = "you must enter description";
	return errors;
};

const formWrapped = reduxForm({
	form: 'streamCreate',
	validate: validate
})(CreateStream);

export default connect(null,{createStream})(formWrapped);