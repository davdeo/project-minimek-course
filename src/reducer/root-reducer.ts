import { tabBarReducer } from '@feature/tab-bar/tab-bar.reducer';
import { Action } from '@models/action.model';
import { State } from '@models/state.model';
import { combineReducers } from 'redux';

export const rootReducer = combineReducers<State, Action>({
    tabBar: tabBarReducer
});
