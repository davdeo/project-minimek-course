import { TabBarActions } from './tab-bar.actions';
import { createReducer } from '../../common/utils/reducer-utils';
import { TabName } from '../../enums/tab-name.enum';

const INITIAL_STATE = {
    currentTab: TabName.UNIT_INFO
};

export interface TabBarReducerState {
    currentTab: TabName;
}

function selectTab(state: TabBarReducerState, action: TabBarActions.SelectTabAction): TabBarReducerState {
    return {
        ...state,
        currentTab: action.payload.tabName
    };
}

export const tabBarReducer = createReducer<TabBarReducerState>(INITIAL_STATE, {
    [TabBarActions.ActionTypes.SELECT_TAB_ACTION]: selectTab
});
