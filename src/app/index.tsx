import React, { FunctionComponent } from 'react';
import { AppBar, CssBaseline, Toolbar, Typography } from '@mui/material';
import { TabDataModel } from '../models';
import { MechsContainer, PilotsContainer, TabBarContainer, UnitInfoContainer, UnitOrganization } from '../feature';

export const App: FunctionComponent = () => {
    const tabs: TabDataModel[] = [
        { name: 'unitInfo', label: 'Unit Info', component: UnitInfoContainer },
        { name: 'pilots', label: 'Pilots', component: PilotsContainer },
        { name: 'mechs', label: 'Mechs', component: MechsContainer },
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
