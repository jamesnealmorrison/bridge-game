import apiClient from '../../apiClient'
import { CREATE_GAME } from './game.types'
import { selectCurrentGameId } from './game.selectors'

export const createGame = () => async (dispatch, getState) => {
  console.log('in createGame action!!!')
  const res = await apiClient.post('/createBridgeGame')
  console.log('response = ', res)
  dispatch({
    type: CREATE_GAME,
    payload: res
  })
}

export const joinGame = () => async (dispatch, getState) => {
  console.log('in joinGame action!!! selectCurrentGameId = ', selectCurrentGameId(getState()))
  const res = await apiClient.put('/joinBridgeGame?gameId='+selectCurrentGameId(getState())+'&playerName=Jim&position=SOUTH')
  console.log('response = ', res)
  dispatch({
    type: CREATE_GAME,
    payload: res
  })
}
