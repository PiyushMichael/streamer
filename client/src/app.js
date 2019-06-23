import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter, Route} from 'react-router-dom';

const PageOne = () => {
	return <div>page one.... <a href="/pagetwo">Page 2</a></div>
}

const PageTwo = () => {
	return <div>page two... <a href="/">home</a></div>
}

const App = () => {
	return <div>
		<BrowserRouter>
		<div>
			<Route path="/" exact component={PageOne}/>
			<Route path="/pagetwo" component={PageTwo} />
		</div>
		</BrowserRouter>
		haaaalo from root app :)
	</div>
}

export default App;