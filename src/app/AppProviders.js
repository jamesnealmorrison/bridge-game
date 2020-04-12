import { ConnectedRouter } from 'react-router-redux'
import { Provider } from 'react-redux'
import PropTypes from 'prop-types'
import React from 'react'
import createHistory from 'history/createBrowserHistory'
import configureStore from './store/configureStore'

const AppProviders = ({
  history = createHistory(),
  store = configureStore({}, history),
  children,
}) => (
  <Provider store={store}>
    <ConnectedRouter history={history}>{children}</ConnectedRouter>
  </Provider>
)

AppProviders.propTypes = {
  history: PropTypes.any,
  store: PropTypes.any,
  children: PropTypes.node,
}

export default AppProviders
