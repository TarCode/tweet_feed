import React from 'react'

export default (props) => {
  return (
    <div className='container'>
      <h5>Tweets</h5>
      <ul className='collection'>
        {
          props.tweets.length > 0 ?
          props.tweets.reverse().map((tweet, key) => (
            <li key={ key } className='collection-item row'>
              <div className='col s3'>
                <img className='responsive-img' src={tweet.user.profile_image_url}/>
              </div>
              <div className='col s9'>
                <h5>{tweet.user.name}</h5>
                <span className='right'>{tweet.createdAt}</span>
                <p>{tweet.text}</p>
              </div>
            </li>
          )) :
          (<p>No tweets yet</p>)
        }
      </ul>
    </div>
  )
}
