import { Record } from 'immutable'
import { combineReducers } from 'redux-immutable'
import { reducer as form } from 'redux-form/immutable'
import always from 'lodash/fp/constant'
import mapValues from 'lodash/fp/mapValues'

import app from './app/app.reducer'

const reducers = {
  app,
}

export const GlobalStateRecord = new Record(
  mapValues(always(undefined), reducers),
)

export default combineReducers(reducers)
