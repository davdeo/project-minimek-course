import { combineReducers } from 'redux';
import { testReducer, TestReducerState } from './testReducer';

export interface State {
    testReducer: TestReducerState;
}

export const rootReducer = combineReducers({
    testReducer
});
