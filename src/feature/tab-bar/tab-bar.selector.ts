import { TabBarReducerState } from '@feature/tab-bar/tab-bar.reducer';
import { State } from '@models/state.model';
import { createSelector } from 'reselect';

export const selectTabBar = (state: State): TabBarReducerState => state.tabBar;

export const selectActiveTab = createSelector(selectTabBar, (tabBar) => tabBar.activeTab);
