import React, { FunctionComponent } from 'react';
import { AppBar, CssBaseline, Toolbar, Typography } from '@mui/material';
import { TabDataModel } from '../models';
import { Mechs, Pilots, TabBarContainer, UnitInfo, UnitOrganization } from '../feature';

export const App: FunctionComponent = () => {
    const tabs: TabDataModel[] = [
        { name: 'unitInfo', label: 'Unit Info', component: UnitInfo },
        { name: 'pilots', label: 'Pilots', component: Pilots },
        { name: 'mechs', label: 'Mechs', component: Mechs },
        { name: 'unitOrganization', label: 'Unit Organization', component: UnitOrganization }
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
