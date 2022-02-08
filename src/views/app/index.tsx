import React, { FunctionComponent } from 'react';
import './style.css';
import SampleComponent from '../../components/sample-component';

export const App: FunctionComponent = () => (
    <div className="app">
        <div className="app-header">
            <h2>Project Mini-Mek</h2>
        </div>
        <SampleComponent />
    </div>
);
