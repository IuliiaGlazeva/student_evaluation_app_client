import { CREATE_EVALUATION } from '../actions/types'

export default function (state = {}, {type, payload}) {
	switch(type) {

    case CREATE_EVALUATION:
      console.log(payload);
      return payload

		default:
      return state
	}
}
