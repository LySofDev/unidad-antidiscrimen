import React from 'react'
import ReactDOM from 'react-dom'
import App from '../App'

document.addEventListener('DOMContentLoaded', () => {
  ReactDOM.render(
    <App><h1>FlashTest</h1></App>,
    document.body.appendChild(document.createElement('div')),
  )
})
