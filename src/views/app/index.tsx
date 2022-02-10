import React, { FunctionComponent } from 'react';
import { AppBar, CssBaseline, Toolbar, Typography } from '@mui/material';

export const App: FunctionComponent = () => (
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
        </div>
    </>
);
