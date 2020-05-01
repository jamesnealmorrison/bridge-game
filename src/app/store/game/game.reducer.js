import { GameStateRecord } from './game.records'
import { START_GAME } from '../app/app.types'
import { UPDATE_GAME } from './game.types'

export default function appReducer(state = GameStateRecord(), action) {
  console.log('in game reducer. action = ', action)
  switch (action.type) {
    case START_GAME:
    case UPDATE_GAME:
      console.log('updating game state')
      console.log('action.payload = ', action.payload)
      return state.set('players', action.payload.players)
       .set('dealer', action.payload.dealer)
       .set('currentTurn', action.payload.currentTurn)
       .set('bidHistory', action.payload.bidHistory)
    default:
      return state
  }
}
