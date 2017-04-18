import { RECEIVE_TWEETS } from '../actions/tweetActions'
import merge from 'lodash'

const initalState = []

export default function (state = initalState, action) {
  switch (action.type) {
    case RECEIVE_TWEETS:
      const newState = state.map(t => t)
      newState.push(action.data)
      if (newState.length > 25) {
        newState.length = 25
      }
      return newState
  }
  return state
}
