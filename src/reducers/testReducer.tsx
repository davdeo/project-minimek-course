import { Action } from 'redux';

export interface TestReducerState {
    data: number;
}

const INITIAL_STATE = {
    data: 42
};

export function testReducer(state: TestReducerState = INITIAL_STATE, action: Action): TestReducerState {
    switch (action.type) {
        default: {
            return state;
        }
    }
}
