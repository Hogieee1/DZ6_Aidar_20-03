import React from 'react'

function Comment({ comment }) {
  return (
    <div>
      <p style={{width: "800px", margin: '0 auto'}}>{comment}</p>
    </div>
  )
}

export default Comment