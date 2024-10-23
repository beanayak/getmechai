import React from 'react'

const Username = ({params}) => {
  return (
    <div className="text-3xl">{params.username}</div>
  )
}

export default Username