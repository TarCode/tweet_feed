import io from 'socket.io-client'

export const RECEIVE_TWEETS = "RECEIVE_TWEETS"

export function receiveTweets(data) {
  return {
    type: RECEIVE_TWEETS,
    data
  }
}
