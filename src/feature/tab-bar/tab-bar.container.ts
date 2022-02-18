import { connect } from 'react-redux';
import { TabBarActions } from './tab-bar.actions';
import { TabBar, TabBarStateProps } from './tab-bar';
import { State } from '../../models/state.model';

const mapState = (state: State): TabBarStateProps => {
    return {
        activeTab: state.tabBarReducer.currentTab
    };
};

const actions = { onTabClick: TabBarActions.selectTab };

export const TabBarContainer = connect(mapState, actions)(TabBar);
