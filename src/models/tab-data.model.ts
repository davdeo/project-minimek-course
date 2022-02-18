import React from 'react';
import { TabName } from '../enums/tab-name.enum';

export interface TabDataModel {
    name: TabName;
    label: string;
    component: React.FunctionComponent;
}
