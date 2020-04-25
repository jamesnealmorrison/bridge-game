export const selectHand = (direction, state) => {
  if (state.app.gameStarted) {
    return state.game.players[direction].hand
  } else {
    return null
  }
}
