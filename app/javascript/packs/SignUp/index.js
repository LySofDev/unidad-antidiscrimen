import React from 'react'
import ReactDOM from 'react-dom'
import App from '../App'
// import FormState from './FormState'
// import AuthenticateUser from './AuthenticateUser'
// import LoginForm from './Form'
import StoredToken from '../StoredToken'

document.addEventListener('DOMContentLoaded', () => {
  ReactDOM.render(
    <App>
      <h1>sign up</h1>
    </App>,
    document.body.appendChild(document.createElement('div')),
  )
})
