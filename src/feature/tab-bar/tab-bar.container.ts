import { State } from '@models/state.model';
import { connect } from 'react-redux';
import { TabBar, TabBarStateProps } from './tab-bar';
import { TabBarActions } from './tab-bar.actions';

const mapState = (state: State): TabBarStateProps => {
    return {
        activeTab: state.tabBarReducer.currentTab
    };
};

const actions = { onTabClick: TabBarActions.selectTab };

export const TabBarContainer = connect(mapState, actions)(TabBar);
