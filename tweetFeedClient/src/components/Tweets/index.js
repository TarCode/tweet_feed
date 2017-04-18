import React from 'react'
import { connect } from 'react-redux'
import TweetsComponent from './TweetsComponent'

function mapStateToProps(state) {
  const { tweets } = state
  return {
    tweets
  }
}

export default connect(mapStateToProps)(TweetsComponent)
