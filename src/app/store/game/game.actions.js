import apiClient from '../../apiClient'

export const createGame = () => async (dispatch, getState) => {
  console.log('in createGame action!!!')
  const res = await apiClient.post('/createBridgeGame')
  console.log('response = ', res)
}
