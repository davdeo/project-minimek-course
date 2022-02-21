import { createReducer } from '@common/utils/reducer-utils';
import { TabName } from '@enums/tab-name.enum';
import { TabBarActions } from './tab-bar.actions';

const INITIAL_STATE: TabBarReducerState = {
    activeTab: TabName.UNIT_INFO
};

export interface TabBarReducerState {
    activeTab: TabName;
}

function selectTab(state: TabBarReducerState, action: TabBarActions.SelectTabAction): TabBarReducerState {
    return {
        ...state,
        activeTab: action.payload.tabName
    };
}

export const tabBarReducer = createReducer<TabBarReducerState>(INITIAL_STATE, {
    [TabBarActions.ActionTypes.SELECT_TAB_ACTION]: selectTab
});
