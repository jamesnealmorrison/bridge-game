import { GameStateRecord } from './game.records'
import { START_GAME } from '../app/app.types'
import { SET_CURRENT_BID } from './game.types'

export default function appReducer(state = GameStateRecord(), action) {
  console.log('in game reducer. action = ', action)
  switch (action.type) {
    case START_GAME:
      console.log('updating game state')
      console.log('action.payload = ', action.payload)
      return state.set('players', action.payload.players)
       .set('dealer', action.payload.dealer)
       .set('currentTurn', action.payload.currentTurn)
       .set('currentBid', action.payload.bidHistory[action.payload.bidHistory.length-1])
    case SET_CURRENT_BID:
      return state.set('currentBid', action.payload)
    default:
      return state
  }
}
