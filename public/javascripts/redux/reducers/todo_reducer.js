import { FETCH_ITEMS, UPDATE_ITEM } from '../actions/todo';

const INITIAL_STATE = [];

export default function(state = INITIAL_STATE, action) {
	switch(action.type) {
	case FETCH_ITEMS:
		return action.payload.data
	case UPDATE_ITEM:
		return action.payload.data
	default:
		return state;
	}
}
