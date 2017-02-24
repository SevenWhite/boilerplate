import * as React from 'react';
import Sidebar from "./Sidebar";

export default class App extends React.Component<undefined, undefined>{
	render() {
		return <div>
			<h1>App component was rendered!</h1>
			<Sidebar/>
			{this.props.children}
		</div>;
	}
}