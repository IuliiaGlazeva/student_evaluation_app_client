import {SHOW_STUDENTS, SHOW_STUDENT, CREATE_STUDENT} from '../actions/students'


const initialState = []
export default (state = initialState, {type, payload} = {}) => {
  switch (type) {
    case SHOW_STUDENT:
      return payload
    default:
      return state
      }
    }
