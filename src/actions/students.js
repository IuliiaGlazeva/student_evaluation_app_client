import * as request from 'superagent'
import {baseUrl} from '../constants'
import { randomStudent } from '../lib/randomfanc'



export const SHOW_STUDENTS = 'SHOW_STUDENTS'
export const SHOW_STUDENT = 'SHOW_STUDENT'

export const CREATE_STUDENT = 'CREATE_STUDENT'
export const CREATE_EVALUATION = 'CREATE_EVALUATION'
export const PICK_STUDENT = 'RANDOM_STUDENT'
//export const GET_STUDENT = 'GET_STUDENT'

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

export const createStudent = (student) => (dispatch, getState) => {
  const state = getState()

  console.log(student)
  request
    .post(`${baseUrl}/createStudent`)
    .send(student)
    .then(result => {
      dispatch({
        type: CREATE_STUDENT,
        payload: result.body
      })
    })
    .catch(err => console.error(err))
}

export const pickRandomStudent = (students) => (dispatch) => {
  return { type: PICK_STUDENT,
            payload:  randomStudent(students)
          }
}


export const createEvaluation = (evaluation, id) => (dispatch, getState) => {
  const state = getState()

  request
    .post(`${baseUrl}/allStudents/${id}`)
    .send(evaluation)
    .then(result => {
      dispatch({
        type: CREATE_EVALUATION,
        payload: result.body
      })
    })
    .catch(err => console.error(err))
}
