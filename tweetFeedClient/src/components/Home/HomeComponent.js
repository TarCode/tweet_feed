import React from 'react'
import { Link } from 'react-router'

export default ({tweetLength}) => {
  return (
    <div className='container'>
      <h5>Tweets</h5>
      <div className='collection'>
          <Link className='collection-item' to='/tweets'>Tweets<span className='new badge'>{tweetLength}</span></Link>
      </div>
    </div>
  )
}
