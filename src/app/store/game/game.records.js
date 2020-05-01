import { Record } from 'immutable'

export const GameStateRecord = new Record({
  players: null,
  dealer: null,
  currentTurn: null,
  bidHistory: null,
})
