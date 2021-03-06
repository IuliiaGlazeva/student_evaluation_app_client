import {SHOW_BATCHES, CREATE_BATCH} from '../actions/batches'

/*
The state will contain the BATCHEs in an object with the BATCH ID as key
*/
const initialState = []
export default (state = initialState, {type, payload} = {}) => {
  switch (type) {
    case SHOW_BATCHES:
      return payload
    case CREATE_BATCH:
      return [...state, payload]
    default:
      return state
      }
    }
