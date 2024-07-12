import React from 'react'
import './LazyLoad.css'
export default function LazyLoad() {
  return (
    <div className="screen">
      <div className="loader">
        <div className="dot"></div>
        <div className="dot"></div>
        <div className="dot"></div>
      </div>
    </div>
  )
}
