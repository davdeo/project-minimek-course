import thunk from 'redux-thunk';
import { applyMiddleware, compose, createStore, Store, StoreEnhancer } from 'redux';
import { rootReducer, State } from '../reducers/root-reducer';

export function configureStore(preloadedState?: State): Store<State> {
    const middlewares = [thunk];
    const middlewareEnhancer = applyMiddleware(...middlewares);

    const storeEnhancers = [middlewareEnhancer];

    const composedEnhancer: StoreEnhancer<Store> = compose(...storeEnhancers);

    return createStore(rootReducer, preloadedState, composedEnhancer);
}
