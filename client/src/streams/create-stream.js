import React from 'react';
import {connect} from 'react-redux';
import {createStream} from '../actions';
import StreamForm from './stream-form';

class CreateStream extends React.Component{
	onSubmit = (values) => {
		this.props.createStream(values);
	};
	
	render(){
		return (
			<div>
				<h3>Create a Stream</h3>
				<StreamForm onSubmit={this.onSubmit}/>
			</div>
		);
	}
}

export default connect(null,{createStream})(CreateStream);