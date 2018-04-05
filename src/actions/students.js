import * as request from 'superagent'
import {baseUrl} from '../constants'


export const SHOW_STUDENTS = 'SHOW_STUDENTS'
export const SHOW_STUDENT = 'SHOW_STUDENT'

export const CREATE_STUDENT = 'CREATE_STUDENT'

export const getStudents = () => (dispatch, getState) => {console.log("hello!")
  const state = getState()

  request
    .get(`${baseUrl}/allStudents`)
    .then(result => {
      dispatch({
        type: SHOW_STUDENTS,
        payload: result.body
      })
    })
    .catch(err => console.error(err))
}

export const getStudent = (id) => (dispatch, getState) => {console.log("hello!")
  const state = getState()

  request
    .get(`${baseUrl}/allStudents/${id}`)
    .then(result => {
      dispatch({
        type: SHOW_STUDENT,
        payload: result.body
      })
    })
    .catch(err => console.error(err))
}
