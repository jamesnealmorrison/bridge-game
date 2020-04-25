import { GameStateRecord } from './game.records'

export default function appReducer(state = GameStateRecord(), action) {
  console.log('in game reducer. action = ', action)
  switch (action.type) {
    // case CREATE_GAME:
      // console.log('processing create_game')
      // return state.set('uuid', action.payload.uuid)
      // .set('players', action.payload.players)
      // .set('dealer', action.payload.dealer)
    default:
      return state
  }
}
