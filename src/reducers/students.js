import {SHOW_STUDENTS, SHOW_STUDENT, CREATE_STUDENT} from '../actions/students'


const initialState = []
export default (state = initialState, {type, payload} = {}) => {
  switch (type) {
    case SHOW_STUDENTS:
      return payload
    case CREATE_STUDENT:
      return [...state, payload]
    default:
      return state
      }
    }
