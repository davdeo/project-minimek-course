import React, { FunctionComponent } from 'react';
import { AppBar, CssBaseline, Toolbar, Typography } from '@mui/material';
import { TabDataModel } from '../../models';
import { TabBarContainer } from '../../components';

const UnitInfo: React.FunctionComponent = () => <div>Unit Info content</div>;
const Pilots: React.FunctionComponent = () => <div>Pilots content</div>;
const Mechs: React.FunctionComponent = () => <div>Mechs content</div>;
const UnitOrganization: React.FunctionComponent = () => <div>Unit Organization content</div>;

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
