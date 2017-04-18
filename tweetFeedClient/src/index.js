import React from 'react'
import { render } from 'react-dom'
import { Router, Route, IndexRoute, browserHistory } from 'react-router'
import { syncHistoryWithStore } from 'react-router-redux'
import { Provider } from 'react-redux'
import configureStore from './stores/configureStore'
import * as actions from './actions'
import AppTemplate from './components/AppTemplate'
import Home from './components/Home'
import Tweets from './components/Tweets'
import io from 'socket.io-client'

const socket = io.connect('http://localhost:3000')
const store = configureStore()
const history = syncHistoryWithStore(browserHistory, store)

socket.on('tweet', (data) => {
  console.log(data);
  store.dispatch(actions.receiveTweets(data))
})

render (
  <Provider store={store}>
    <Router history={history}>
      <Route path='/' component={AppTemplate}>
        <IndexRoute component={Home}/>
        <Route path='/tweets' component={Tweets}/>
      </Route>
    </Router>
  </Provider>,
  document.getElementById('main')
)
