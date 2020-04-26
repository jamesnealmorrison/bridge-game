export const selectHand = (direction, state) => {
  if (state.app.gameStarted) {
    return state.game.players[direction].hand
  } else {
    return null
  }
}
export const selectCurrentBid = state => state.game.currentBid
export const selectCurrentTurn = state => state.game.currentTurn
