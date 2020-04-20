import { ConnectedRouter } from 'connected-react-router'
import { Provider } from 'react-redux'
import PropTypes from 'prop-types'
import React from 'react'
import createHistory from 'history/createBrowserHistory'
import configureStore, { history } from './store/configureStore'

const AppProviders = ({
  store = configureStore({}),
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
