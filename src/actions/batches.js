import * as request from 'superagent'
import {baseUrl} from '../constants'

export const SHOW_BATCHES = 'SHOW_BATCHES'
export const ADD_BATCH = 'ADD_BATCH'



export const getBatches = () => (dispatch, getState) => {console.log("hello!")
  const state = getState()

  request
    .get(`${baseUrl}/allBatches`)
    .then(result => {
      dispatch({
        type: SHOW_BATCHES,
        payload: result.body
      })
    })
    .catch(err => console.error(err))
}


/*export const joinGame = (gameId) => (dispatch, getState) => {
  const state = getState()
  const jwt = state.currentUser.jwt

  request
    .post(`${baseUrl}/games/${gameId}/players`)
    .set('Authorization', `Bearer ${jwt}`)
    .then(result => {
      dispatch({
        type: JOIN_GAME_SUCCESS
      })
    })
    .catch(err => console.error(err))
}*/

/*export const createGame = () => (dispatch, getState) => {
  const state = getState()
  const jwt = state.currentUser.jwt

  request
    .post(`${baseUrl}/games`)
    .set('Authorization', `Bearer ${jwt}`)
    .then(result => {
      dispatch({
        type: ADD_GAME,
        payload: result.body
      })
    })
    .catch(err => console.error(err))
}

export const updateGame = (gameId, board) => (dispatch, getState) => {
  const state = getState()
  const jwt = state.currentUser.jwt

  request
    .patch(`${baseUrl}/games/${gameId}`)
    .set('Authorization', `Bearer ${jwt}`)
    .send({board})
    .then(result => {
      dispatch({
        type: UPDATE_GAME_SUCCESS
      })
    })
    .catch(err => console.error(err))
}

export const updateGamen = (gameId, answer) => (dispatch, getState) => {
  const state = getState()
  const jwt = state.currentUser.jwt

  request
    .patch(`${baseUrl}/games/${gameId}`)
    .set('Authorization', `Bearer ${jwt}`)
    .send({answer})
    .then(result => {
      dispatch({
        type: UPDATE_GAME_SUCCESS
      })
    })
    .catch(err => console.error(err))
}*/
