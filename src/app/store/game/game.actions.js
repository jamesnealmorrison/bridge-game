import apiClient from '../../apiClient'
import { JOIN_GAME, START_GAME } from '../app/app.types'

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
