import React from 'react'

type Button = {
    text: string
}

const Button = ({text}: Button) => {
  return (
    <button>{text}</button>
  )
}

export default Button