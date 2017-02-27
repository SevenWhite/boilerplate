import {fromJS} from 'immutable';
import {INCREMENT_COUNTER, DECREMENT_COUNTER} from "../constants/index";
import {combineReducers, Action} from "redux";
import {Store} from "../store/index";

const INITIAL_STATE: Store.Counter = {
	value: 0
};

function counter(state: Store.Counter = INITIAL_STATE, action: Action) {
	switch (action.type) {
		case INCREMENT_COUNTER:
			return {value: state.value + 1};
		case DECREMENT_COUNTER:
			return {value: state.value - 1};
		default:
			return state;
	}
}

const reducers =  combineReducers({
	counter,
});

export default reducers;