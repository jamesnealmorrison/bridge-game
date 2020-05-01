export const selectHand = (direction, state) => {
  if (state.app.gameStarted) {
    return state.game.players[direction].hand
  } else {
    return null
  }
}
export const selectBidHistory = state => state.game.bidHistory
export const selectCurrentBid = state => {
  if (state.game.bidHistory) {
    return state.game.bidHistory[state.game.bidHistory.length - 1]
  } else {
    return null
  }
}
export const selectCurrentTurn = state => state.game.currentTurn
