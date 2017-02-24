import * as React from 'react';
import {Link} from 'react-router';

export default class Sidebar extends React.Component<undefined, undefined> {
	render() {
		return (
			<ul>
				<li><Link to="/">Home page</Link></li>
				<li><Link to="/hello">Hello page</Link></li>
			</ul>
		)
	}
}