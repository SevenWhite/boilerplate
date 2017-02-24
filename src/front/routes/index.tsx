import * as React from 'react';
import {browserHistory, Router, Route} from 'react-router';
import App from "../components/App";
import Hello from "../components/Hello";


export default (
	<Router history={browserHistory}>
		<Route path="/" component={App}>
			<Route path="hello" component={Hello} />
		</Route>
	</Router>
);