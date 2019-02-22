import React from 'react'
import Analytics from 'analytics'

const Message = () => {
  Analytics.setUserId(123)
  return (
    <div className="content">
      <h1>webpack-alias-playground</h1>
      <p className="description">Testing Webpack aliases with React</p>
    </div>
  )
}

export default Message
