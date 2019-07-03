import React from 'react';
import {Link} from 'react-router-dom';
import Modal from '../modal';
import history from '../history';
import {fetchStream,deleteStream} from '../actions';
import {connect} from 'react-redux';

class DeleteStream extends React.Component{
	componentDidMount() {
		this.props.fetchStream(this.props.match.params.id);
	};
	
	render(){
		const id = this.props.match.params.id;
		
		const actions = (
			<React.Fragment>
				<button onClick={() => this.props.deleteStream(id)} className="ui primary button negative">Delete</button>
				<button onClick={() => history.push('/')} className="ui button">Cancel</button>
			</React.Fragment>
		);
		const statement = () => {
			if(!this.props.stream) return "Are you sure you want to delete stream?";
			return "Are you sure you want to delete '"+this.props.stream.title+"' ?";
		};
		
		console.log(this.props.match.params.id);
		
		return (
			<Modal 
				title="Delete stream" 
				statement={statement()}
				actions={actions}
				onDismiss={() => history.push('/')}
			/>);
	}
}

const mapToStateToProps = (state,ownProps) => {
	return {stream: state.streams[ownProps.match.params.id]};
};

export default connect(mapToStateToProps,{fetchStream,deleteStream})(DeleteStream);