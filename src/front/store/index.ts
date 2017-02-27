import {createStore, Store as ReduxStore} from 'redux';
import reducers from '../reducers';

export namespace Store {
	export type Counter = {value: number}

	export type All = {
		counter: Counter
	}
}

const store: ReduxStore<{}> = createStore(reducers);

export default store;