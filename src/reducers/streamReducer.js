import * as types from 'actions/types'
import { act } from 'react-dom/test-utils'

export default (state = {}, action) => {
  switch (action.type) {
    case types.FETCH_STREAM:
      return { ...state, [action.payload.id]: action.payload }
    case types.CREATE_STREAM:
      return { ...state, [action.payload.id]: action.payload }
    case types.EDIT_STREAM:
      return { ...state, [action.payload.id]: action.payload }
    default:
      return state
  }
}
