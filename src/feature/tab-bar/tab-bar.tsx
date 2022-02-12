import { Box, Tab, Tabs } from '@mui/material';
import React from 'react';
import { TabDataModel } from '../../models';
import { ToggleDisplay } from '../../common';

interface Props {
    tabs: TabDataModel[];
    activeTab: string;
    onTabClick: (event: React.SyntheticEvent, tabValue: string) => void;
}

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
                <Tabs value={activeTab} onChange={onTabClick}>
                    {tabItems}
                </Tabs>
            </Box>
            {tabPanels}
        </div>
    );
};
