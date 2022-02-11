import React, { useState } from 'react';
import { TabDataModel } from '../../models';
import { TabBar } from './tab-bar';

interface Props {
    tabs: TabDataModel[];
}

export const TabBarContainer: React.FunctionComponent<Props> = ({ tabs }: Props) => {
    const firstTab = tabs[0];
    const [activeTab, setActiveTab] = useState(firstTab.name);

    return <TabBar tabs={tabs} activeTab={activeTab} onTabClick={(event, tabValue) => setActiveTab(tabValue)} />;
};
