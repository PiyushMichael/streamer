import React from 'react';
import {Router, Route, Link} from 'react-router-dom';

import StreamList from './streams/stream-list';
import ShowStream from './streams/show-stream';
import CreateStream from './streams/create-stream';
import EditStream from './streams/edit-stream';
import DeleteStream from './streams/delete-stream';
import Header from './header';
import history from './history';

const App = () => {
	return <div className="ui container">
		<Router history={history}>
		<div>
			<Header />
			<Route path="/" exact component={StreamList}/>
			<Route path="/streams/new" component={CreateStream}/>
			<Route path="/streams/edit" component={EditStream}/>
			<Route path="/streams/delete" component={DeleteStream}/>
			<Route path="/streams/show" component={ShowStream}/>
		</div>
		</Router>
	</div>
}

export default App;