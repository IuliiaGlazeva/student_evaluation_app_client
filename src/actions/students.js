import * as request from 'superagent'
import {baseUrl} from '../constants'


export const SHOW_STUDENTS = 'SHOW_STUDENTS'
export const CREATE_STUDENT = 'CREATE_STUDENT'

export const getStudents = (id) => (dispatch, getState) => {console.log("hello!")
  const state = getState()

  request
    .get(`${baseUrl}/allBatches/${id}/allStudents`)
    .then(result => {
      dispatch({
        type: SHOW_STUDENTS,
        payload: result.body
      })
    })
    .catch(err => console.error(err))
}
