import React, { FunctionComponent } from 'react';
import { AppBar, CssBaseline, Toolbar, Typography } from '@mui/material';
import { TabDataModel } from '../models/tab-data.model';

import { TabName } from '../enums/tab-name.enum';
import { UnitInfoContainer } from '../feature/unit-info/unit-info.container';
import { PilotsContainer } from '../feature/pilots/pilots.container';
import { MechsContainer } from '../feature/mechs/mechs.container';
import { UnitOrganizationContainer } from '../feature/unit-organization/unit-organization.container';
import { TabBarContainer } from '../feature/tab-bar/tab-bar.container';

export const App: FunctionComponent = () => {
    const tabs: TabDataModel[] = [
        { name: TabName.UNIT_INFO, label: 'Unit Info', component: UnitInfoContainer },
        { name: TabName.POLOTS, label: 'Pilots', component: PilotsContainer },
        { name: TabName.MECHS, label: 'Mechs', component: MechsContainer },
        { name: TabName.UNIT_ORGANIZATION, label: 'Unit Organization', component: UnitOrganizationContainer }
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
