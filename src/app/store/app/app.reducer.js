import { AppStateRecord } from './app.records'
import { START_GAME } from './app.types'

export default function appReducer(state = AppStateRecord(), action) {
  switch (action.type) {
    case START_GAME:
      return state.set('gameStarted', true)
    default:
      return state
  }
}
