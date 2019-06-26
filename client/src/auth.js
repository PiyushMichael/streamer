//743441892621-2sbad6tdql83dr499qluodqi2e2f4qf4.apps.googleusercontent.com 
//132886540560-q8v9sm21gelvet6go44tpabkfbhpb7b0.apps.googleusercontent.com
import React from 'react';
import {connect} from 'react-redux';
import {signIn, signOut} from './actions';

class Auth extends React.Component{	
	componentDidMount(){
		window.gapi.load('client:auth2',() => {
			window.gapi.client.init({
				clientId: '132886540560-q8v9sm21gelvet6go44tpabkfbhpb7b0.apps.googleusercontent.com',
				scope: 'email'
			}).then(() => {
				this.auth = window.gapi.auth2.getAuthInstance();
				this.onAuthChange(this.auth.isSignedIn.get());
				this.auth.isSignedIn.listen(this.onAuthChange);
			});
		});
		
	}
	
	onAuthChange = (isSignedIn) => {
		if(isSignedIn)this.props.signIn();
		else this.props.signOut();
	}
	
	onSignInClick = () => {
		this.auth.signIn();
	};
	
	onSignOutClick = () => {
		this.auth.signOut();
	};
	
	renderAuthButton = () => {
		if(this.props.isSignedIn === null) return null;
		if(this.props.isSignedIn === true) return (<button onClick={this.onSignOutClick} className="ui red google button">
			<i className="google icon" />Sign out
		</button>);
		else return (<button onClick={this.onSignInClick} className="ui red google button">
			<i className="google icon" />Sign in
		</button>);
	}
	
	signClick = () => {
		if(this.props.isSignedIn === true) window.gapi.auth2.getAuthInstance().signIn();
		else window.gapi.auth2.getAuthInstance().signOut();
	}
	
	render(){
		return <div onClick={this.signClick}>{this.renderAuthButton()}</div>
	}
}

const mapStateToProps = (state) => {
	return {isSignedIn: state.auth.isSignedIn};
};

export default connect(mapStateToProps,{signIn,signOut})(Auth);