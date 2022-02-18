import { combineReducers } from 'redux';
import { tabBarReducer } from '../feature/tab-bar/tab-bar.reducer';
import { Action } from '../models/action.model';
import { State } from '../models/state.model';

export const rootReducer = combineReducers<State, Action>({
    tabBarReducer
});
