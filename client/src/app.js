import React from 'react';
import {BrowserRouter, Route, Link} from 'react-router-dom';

import StreamList from './streams/stream-list';
import ShowStream from './streams/show-stream';
import CreateStream from './streams/create-stream';
import EditStream from './streams/edit-stream';
import DeleteStream from './streams/delete-stream';
import Header from './header';

const App = () => {
	return <div className="ui container">
		<BrowserRouter>
		<div>
			<Header />
			<Route path="/" exact component={StreamList}/>
			<Route path="/streams/new" component={CreateStream}/>
			<Route path="/streams/edit" component={EditStream}/>
			<Route path="/streams/delete" component={DeleteStream}/>
			<Route path="/streams/show" component={ShowStream}/>
		</div>
		</BrowserRouter>
	</div>
}

export default App;