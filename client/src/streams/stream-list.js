import React from 'react';
import {Link} from 'react-router-dom';
import {fetchStreams} from '../actions';
import {connect} from 'react-redux';

class StreamList extends React.Component{
	componentDidMount(){
		this.props.fetchStreams();
	}
	
	renderList(){
		return this.props.streams.map(stream => {
			return (<div className="item" key={stream.id}>
				{this.showButtons(stream)}
				<i className="large middle aligned icon camera" />
				<div className="content">
					<Link to={`/streams/${stream.id}`} className="header">{stream.title}</Link>
					<div className="description">{stream.description}</div>
				</div>
			</div>);
		});
	};
	
	showButtons (stream) {
		if (stream.user === this.props.userID) 
		return (
			<div className="right floated content">
				<Link to={`/streams/edit/${stream.id}`} className="ui button primary" >Edit</Link>
				<Link to={`/streams/delete/${stream.id}`} className="ui button negative">Delete</Link>
			</div>
		);
	};
	
	showCreate(){
		return(
		<div style={{textAlign: 'right'}}>
			<Link to="/streams/new" className="ui button primary">Create Stream</Link>
		</div>);
	};
	
	render(){
		return <div>
			<h2>page to list streams</h2>
			<div className="ui celled list">{this.renderList()}</div>
			{this.showCreate()}
		</div>
	}
}

const mapStateToProps = (state) => {
	return {
		streams: Object.values(state.streams),
		userID: 1234
	};
};

export default connect(mapStateToProps,{fetchStreams})(StreamList);