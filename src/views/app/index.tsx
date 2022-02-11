import React, { FunctionComponent } from 'react';
import { AppBar, CssBaseline, Toolbar, Typography } from '@mui/material';
import { TabDataModel } from '../../models';
import { TabBarContainer } from '../../components';

export const App: FunctionComponent = () => {
    const tabs: TabDataModel[] = [
        { name: 'unitInfo', label: 'Unit Info' },
        { name: 'pilots', label: 'Pilots' },
        { name: 'mechs', label: 'Mechs' },
        { name: 'unitOrganization', label: 'Unit Organization' }
    ];

    return (
        <>
            <CssBaseline />
            <div className="app">
                <AppBar position="static">
                    <Toolbar variant="regular">
                        <Typography variant="h6" color="inherit" component="div">
                            Project Mini-Mek
                        </Typography>
                    </Toolbar>
                </AppBar>
                <TabBarContainer tabs={tabs} />
            </div>
        </>
    );
};
