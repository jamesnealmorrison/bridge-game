import { Record } from 'immutable'

export const GameStateRecord = new Record({
  players: null,
  dealer: null,
  currentBid: null,
  currentTurn: null,
})
