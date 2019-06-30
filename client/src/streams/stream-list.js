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
				<i className="large middle aligned icon camera" />
				<div className="content">
					<b>{stream.title}</b>
					<div className="description">{stream.description}</div>
				</div>
			</div>);
		});
	};
	
	render(){
		return <div>
			<h2>page to list streams</h2>
			<div className="ui celled list">{this.renderList()}</div> 
		</div>
	}
}

const mapStateToProps = (state) => {
	return {streams: Object.values(state.streams)};
};

export default connect(mapStateToProps,{fetchStreams})(StreamList);