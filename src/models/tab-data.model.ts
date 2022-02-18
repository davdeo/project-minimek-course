import { TabName } from '@enums/tab-name.enum';
import React from 'react';

export interface TabDataModel {
    name: TabName;
    label: string;
    component: React.FunctionComponent;
}
