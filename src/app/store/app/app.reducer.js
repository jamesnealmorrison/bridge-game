import { AppStateRecord } from './app.records'
import { START_GAME, JOIN_GAME } from './app.types'

export default function appReducer(state = AppStateRecord(), action) {
  switch (action.type) {
    case START_GAME:
      return state.set('gameStarted', true)
    case JOIN_GAME:
      return state.set('playerDirection', action.payload)
    default:
      return state
  }
}
