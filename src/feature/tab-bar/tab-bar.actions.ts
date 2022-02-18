import { TabName } from '../../enums/tab-name.enum';

export namespace TabBarActions {
    export enum ActionTypes {
        SELECT_TAB_ACTION = 'TabBarActions.SELECT_TAB_ACTION'
    }

    export interface SelectTabAction {
        type: ActionTypes.SELECT_TAB_ACTION;
        payload: { tabName: TabName };
    }

    export type AllActionInterfaces = SelectTabAction;

    export const selectTab = (tabName: TabName): SelectTabAction => ({
        type: ActionTypes.SELECT_TAB_ACTION,
        payload: { tabName }
    });
}
