import { Box, Tab, Tabs } from '@mui/material';
import React from 'react';
import { TabDataModel } from '../../models';

interface Props {
    tabs: TabDataModel[];
    activeTab: string;
    onTabClick: (event: React.SyntheticEvent, tabValue: string) => void;
}

export const TabBar: React.FunctionComponent<Props> = ({ tabs, activeTab, onTabClick }: Props) => {
    return (
        <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
            <Tabs value={activeTab} onChange={onTabClick}>
                {tabs.map((tabData) => (
                    <Tab value={tabData.name} label={tabData.label} />
                ))}
            </Tabs>
        </Box>
    );
};
