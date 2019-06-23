import React from 'react';
import {BrowserRouter,Route,Link} from 'react-router-dom';

class ShowStream extends React.Component{
	render(){
		return (
			<div>
				page to show stream
				<BrowserRouter>
					<Link to="/">home</Link>
				</BrowserRouter>
			</div>
		);
	}
}

export default ShowStream;