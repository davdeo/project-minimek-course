import { Action } from '@models/action.model';

export function createReducer<ReducerState>(
    initialState: ReducerState,
    fnMap: Record<string, (state: ReducerState, action: Action) => ReducerState>
): (state: ReducerState, action: Action) => ReducerState {
    return (state: ReducerState = initialState, action: Action) => {
        const handler: ((state: ReducerState, action: Action) => ReducerState) | undefined = fnMap[action.type];

        return handler !== undefined ? handler(state, action) : state;
    };
}
