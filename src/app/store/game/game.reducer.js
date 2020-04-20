import { CREATE_GAME } from './game.types'
import { GameStateRecord } from './game.records'

export default function appReducer(state = GameStateRecord(), action) {
  console.log('in game reducer')
  switch (action.type) {
    case CREATE_GAME:
      console.log('processing create_game')
      return state.set('jim', 'testing')
      .set('morrison', 'something')
    default:
      return state
  }
}
