import {PICK_STUDENT} from '../actions/students'


export default function (state = null, {type, payload}) {
	switch(type) {
    case PICK_STUDENT:
      console.log(payload);
      return payload

		default:
      return state
	}
}
