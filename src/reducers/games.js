import {ADD_BATCH, UPDATE_BATCH, UPDATE_BATCHN, SHOW_BATCHES} from '../actions/batches'

/*
The state will contain the games in an object with the game ID as key
*/
const initialState = []
export default (state = initialState, {type, payload} = {}) => {
  switch (type) {
    case SHOW_BATCHES:
      return payload
      }
    }
