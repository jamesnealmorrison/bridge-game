import { GameStateRecord } from './game.records'
import { START_GAME } from '../app/app.types'

export default function appReducer(state = GameStateRecord(), action) {
  console.log('in game reducer. action = ', action)
  switch (action.type) {
    case START_GAME:
      console.log('updating game state')
      return state.set('players', action.payload.players)
       .set('dealer', action.payload.dealer)
    default:
      return state
  }
}
