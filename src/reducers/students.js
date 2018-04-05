import {SHOW_STUDENTS, SHOW_STUDENT, CREATE_STUDENT} from '../actions/students'

/*
The state will contain the BATCHEs in an object with the BATCH ID as key
*/
const initialState = []
export default (state = initialState, {type, payload} = {}) => {
  switch (type) {
    case SHOW_STUDENTS:
      return payload
    case SHOW_STUDENT:
      return payload
    case CREATE_STUDENT:
      return [...state, payload]
    default:
      return state
      }
    }
