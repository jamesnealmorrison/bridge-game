import { createStore, applyMiddleware, compose } from 'redux'
import { routerMiddleware } from 'react-router-redux'
import thunk from 'redux-thunk'
import { createBrowserHistory } from 'history'
import { AppStateRecord } from './app/app.records'
import createRootReducer, { GlobalStateRecord } from './reducer'

export const history = createBrowserHistory()

export default function configureStore(preloadedState) {
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

  const finalState = state.merge(preloadedState)

  const store = createStore(
    createRootReducer(history),
    preloadedState,
    composeEnhancers(...enhancers),
  )

  // Make reducers hot reloadable, see http://mxs.is/googmo
  /* istanbul ignore next */
  if (module.hot) {
    module.hot.accept('./reducer', () => {
      store.replaceReducer(createRootReducer)
    })
  }

  return store
}
