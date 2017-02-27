import * as React from 'react';
import {connect} from "react-redux";
import {incrementCounter, decrementCounter} from "../actions/index";
import {Store} from "../store/index";
import {Dispatch} from "redux";

interface CounterProps {
	count: number
}

interface CounterDispatch {
	increment: () => void,
	decrement: () => void
}

class Counter extends React.Component<CounterProps & CounterDispatch, undefined> {
	render() {
		const {count, increment, decrement} = this.props;
		return (
			<p>
				<button type="button" onClick={decrement}>-</button>
				<strong>{count}</strong>
				<button type="button" onClick={increment}>+</button>
			</p>
		);
	}
}

export default connect(
	(state: Store.All): CounterProps => {
		const count: number = state.counter.value;
		return {count};
	},
	(dispatch: Dispatch<Store.All>): CounterDispatch => {
		return {
			increment: () => dispatch(incrementCounter()),
			decrement: () => dispatch(decrementCounter())
		}
	}
)(Counter)