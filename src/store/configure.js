import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import { routerReducer } from 'react-router-redux';
import thunkMiddleware from 'redux-thunk';

export default function configureStore() {

  let reducers = combineReducers({
    routing: routerReducer,
    happy: () => ({})
  });

  const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

  return createStore(
    reducers,
    composeEnhancers(
      applyMiddleware(
        thunkMiddleware
      )
    )
  );
}
