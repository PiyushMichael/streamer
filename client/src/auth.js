//743441892621-2sbad6tdql83dr499qluodqi2e2f4qf4.apps.googleusercontent.com 
import React from 'react';

class Auth extends React.Component{
	state: {isSignedIn: null};
	
	componentDidMount(){
		window.gapi.load('client:auth2',() => {
			window.gapi.client.init({
				clientId: '743441892621-2sbad6tdql83dr499qluodqi2e2f4qf4.apps.googleusercontent.com ',
				scope: 'email'
			}).then(() => {
				this.auth = window.gapi.auth2.getAuthInstance();
				this.setState({isSignedIn: this.auth.isSignedIn.get()});
			});
		});
		
	}
	
	renderAuthButton() {
		return <div>Login lel</div>
	}
	
	render(){
		return <div>Sign in</div>
	}
}

export default Auth;