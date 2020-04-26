import apiClient from '../../apiClient'
import { JOIN_GAME, START_GAME } from '../app/app.types'
import { SET_CURRENT_BID } from './game.types'

export const joinGame = (direction) => async (dispatch, getState) => {
  const res = await apiClient.put('/joinBridgeGame?direction='+direction)
  dispatch({
    type: JOIN_GAME,
    payload: direction
  })
}

export const startGame = () => async (dispatch, getState) => {
  const res = await apiClient.put('/startBridgeGame')
  console.log('response = ', res)
  dispatch({
    type: START_GAME,
    payload: res
  })
}

export const setCurrentBid = (bidNumber, suit) => async (dispatch, getState) => {
  console.log('in setCurrentBid')
  console.log('bidNumber = ', bidNumber)
  console.log('suit = ', suit)
  dispatch({
    type: SET_CURRENT_BID,
    payload: {bidNumber, suit}
  })
}
