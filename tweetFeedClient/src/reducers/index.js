import { combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux'
import tweets from './tweetReducer'

export default combineReducers({
  tweets,
  routing: routerReducer
})
