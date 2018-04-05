import * as request from 'superagent'
import {baseUrl} from '../constants'
//import {sessionStorageJwtKey} from '../constants'

export const CREATE_BATCH = 'CREATE_BATCH'
export const SHOW_BATCHES = 'SHOW_BATCHES'



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

export const createBatch = (batch) => (dispatch, getState) => {
  const state = getState()


  console.log(batch)
  request
    .post(`${baseUrl}/createBatch`)
    .send(batch)
    .then(result => {
      dispatch({
        type: CREATE_BATCH,
        payload: result.body
      })
    })
    .catch(err => console.error(err))
}
