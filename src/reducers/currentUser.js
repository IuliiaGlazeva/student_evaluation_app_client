import {USER_LOGIN_SUCCESS, USER_LOGOUT} from '../actions/users'
import {sessionStorageJwtKey} from '../constants'

let initialState = null
try {
  const jwt = localStorage.getItem(sessionStorageJwtKey)
  if (jwt) {
    initialState = { jwt }
  }
}
catch (e) {
  console.log(`Error retrieving data from local storage`, e)
}

export default function (state = initialState, {type, payload}) {
	switch (type) {
		case USER_LOGIN_SUCCESS:
			return payload

    case USER_LOGOUT:
      return null

		default:
      return state
	}
}
