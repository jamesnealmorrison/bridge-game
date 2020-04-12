import { createStore, applyMiddleware, compose } from 'redux'
import { routerMiddleware } from 'react-router-redux'
import thunk from 'redux-thunk'

import { AppStateRecord } from './app/app.records'
import combinedReducer, { GlobalStateRecord } from './reducer'

export default function configureStore(initialState = {}, history) {
console.log('in configureStore')
  // Create the store with two middlewares
  // 1. promiseMiddleware: Makes async easy
  // 2. routerMiddleware: Syncs the location/URL path to the state
  const middlewares = [thunk, routerMiddleware(history)]
  const enhancers = [applyMiddleware(...middlewares)]

  // If Redux DevTools Extension is installed use it, otherwise use Redux compose
  /* eslint-disable no-underscore-dangle */
  const composeEnhancers =
    process.env.NODE_ENV !== 'production' &&
    typeof window === 'object' &&
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
      ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
          shouldHotReload: false,
        })
      : compose
  /* eslint-enable */

  const state = GlobalStateRecord({
    app: AppStateRecord({ apiToken: window.localStorage.getItem('apiToken') }),
  })
  const finalState = state.merge(initialState)

  const store = createStore(
    combinedReducer,
    finalState,
    composeEnhancers(...enhancers),
  )

  // Make reducers hot reloadable, see http://mxs.is/googmo
  /* istanbul ignore next */
  if (module.hot) {
    module.hot.accept('./reducer', () => {
      store.replaceReducer(combinedReducer)
    })
  }

  return store
}
