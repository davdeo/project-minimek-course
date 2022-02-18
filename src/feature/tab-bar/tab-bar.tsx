import { ToggleDisplay } from '@common/components/toggle-display';
import { TabName } from '@enums/tab-name.enum';
import { TabDataModel } from '@models/tab-data.model';
import { Box, Tab, Tabs } from '@mui/material';
import React from 'react';

export interface TabBarStateProps {
    activeTab: TabName;
}

export interface TabBarDispatchProps {
    onTabClick: (tabValue: TabName) => void;
}

interface OwnProps {
    tabs: TabDataModel[];
}

type Props = TabBarStateProps & TabBarDispatchProps & OwnProps;

export const TabBar: React.FunctionComponent<Props> = ({ tabs, activeTab, onTabClick }: Props) => {
    const tabItems = tabs.map((tabData) => <Tab value={tabData.name} label={tabData.label} />);

    const tabPanels = tabs.map((tabData) => {
        const { name, component: TabComponent } = tabData;

        return (
            <ToggleDisplay isShown={name === activeTab}>
                <TabComponent />
            </ToggleDisplay>
        );
    });

    return (
        <div>
            <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                <Tabs value={activeTab} onChange={(event, tabValue: TabName): void => onTabClick(tabValue)}>
                    {tabItems}
                </Tabs>
            </Box>
            <Box sx={{ padding: '20px' }}>{tabPanels}</Box>
        </div>
    );
};
