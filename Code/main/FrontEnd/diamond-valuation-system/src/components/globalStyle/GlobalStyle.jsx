import React from 'react'
import './GlobalStyle.scss'
export default function GlobalStyle({children}) {
  return (
    React.Children.only(children)
  )
}
