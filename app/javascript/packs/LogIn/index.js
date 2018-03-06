import React from 'react'
import ReactDOM from 'react-dom'
import App from '../App'
import AuthenticateUser from './AuthenticateUser'
import LoginForm from './Form'

document.addEventListener('DOMContentLoaded', () => {
  ReactDOM.render(
    <App>
      <AuthenticateUser onSuccess={response => console.log(response)}>
        { ({ form, errors, updateField, submitForm }) => (
          <LoginForm
            form={form}
            errors={errors}
            onUpdate={updateField}
            onSubmit={submitForm}
          />
        )}
      </AuthenticateUser>
    </App>,
    document.body.appendChild(document.createElement('div')),
  )
})
