import { Record } from 'immutable'
import { combineReducers } from 'redux'
import { connectRouter } from 'connected-react-router'
import always from 'lodash/fp/constant'
import mapValues from 'lodash/fp/mapValues'

import app from './app/app.reducer'
import game from './game/game.reducer'

const createRootReducer = (history) => combineReducers({
  router: connectRouter(history),
  app,
  game,
})

export const GlobalStateRecord = new Record(
  mapValues(always(undefined), createRootReducer),
)

export default createRootReducer
