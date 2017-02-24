import * as React from 'react';

interface HelloProps {
	compiler: string
	framework: string
}

export default class Hello extends React.Component<HelloProps, undefined> {
	render() {
		return <h1>Hello from {this.props.compiler} and {this.props.framework}!</h1>;
	}
}