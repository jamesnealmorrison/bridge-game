import apiClient from '../../apiClient'

export const createGame = async () => {
  console.log('in createGame action!!!')
  await apiClient.post('/createBridgeGame')
}
