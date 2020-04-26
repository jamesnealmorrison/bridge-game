import apiClient from '../../apiClient'
import { SET_CURRENT_BID } from '../app/app.types'

export const setCurrentBid = (bidNumber, suit) => async (dispatch, getState) => {
  console.log('in setCurrentBid')
  console.log('bidNumber = ', bidNumber)
  console.log('suit = ', suit)
  dispatch({
    type: SET_CURRENT_BID,
    payload: {bidNumber, suit}
  })
}
