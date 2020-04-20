import apiClient from '../../apiClient'
import { CREATE_GAME } from './game.types'

export const createGame = () => async (dispatch, getState) => {
  console.log('in createGame action!!!')
  const res = await apiClient.post('/createBridgeGame')
  console.log('response = ', res)
  dispatch({
    type: CREATE_GAME,
    payload: res
  })
}
