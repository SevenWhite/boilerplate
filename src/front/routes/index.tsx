import * as React from 'react';
import {browserHistory, Router, Route} from 'react-router';
import App from "../components/App";
import Hello from "../components/Hello";
import Counter from "../components/Counter";
import {Provider} from 'react-redux';
import {Store} from "redux";


const Root = (store: Store<any>) => (
	<Provider store={store}>
		<Router history={browserHistory}>
			<Route path="/" component={App}>
				<Route path="hello" component={Hello} />
				<Route path="counter" component={Counter} />
			</Route>
		</Router>
	</Provider>
);

export default Root;