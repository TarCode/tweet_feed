import React from 'react'
import { connect } from 'react-redux'
import HomeComponent from './HomeComponent'

function mapStateToProps(state) {
  const { tweets } = state
  return {
    tweetLength: tweets.length
  }
}

export default connect(mapStateToProps)(HomeComponent)
