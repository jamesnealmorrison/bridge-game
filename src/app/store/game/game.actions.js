import apiClient from '../../apiClient'
import { JOIN_GAME } from '../app/app.types'

export const joinGame = (direction) => async (dispatch, getState) => {
  const res = await apiClient.put('/joinBridgeGame?direction='+direction)
  console.log('response = ', res)
  dispatch({
    type: JOIN_GAME,
    payload: direction
  })
}
