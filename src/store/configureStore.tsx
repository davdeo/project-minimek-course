import thunk from 'redux-thunk';
import { applyMiddleware, createStore, Store, StoreEnhancer } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension/developmentOnly';
import { rootReducer, State } from '../reducer/root-reducer';

export function configureStore(preloadedState?: State): Store<State> {
    const middlewares = [thunk];
    const middlewareEnhancer = applyMiddleware(...middlewares);

    const storeEnhancers = [middlewareEnhancer];

    const composedEnhancer: StoreEnhancer = composeWithDevTools(...storeEnhancers);

    return createStore(rootReducer, preloadedState, composedEnhancer);
}
