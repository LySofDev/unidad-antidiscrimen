import React from 'react'
import ReactDOM from 'react-dom'
import App from '../App'
import FormState from '../FormState'
import AuthenticateUser from './AuthenticateUser'
import LoginForm from './Form'
import StoredToken from '../StoredToken'
import { withRouter } from '../RouterProvider'

const Page = withRouter(({ redirectTo }) => {
  return (
    <StoredToken
      ifValidToken={() => redirectTo("/")}
      unlessValidToken={({ updateToken }) => (
        <AuthenticateUser
          onSuccess={updateToken}
          strategy={({ authenticateUser, errors }) => (
            <FormState
              initialState={{ email: "", password: "" }}
              component={({ form, updateField }) => (
                <LoginForm
                  form={form}
                  errors={errors}
                  onUpdate={updateField}
                  onSubmit={event => authenticateUser(form)}
                />
              )}
            />
          )}
        />
      )}
    />
  )

})

document.addEventListener('DOMContentLoaded', () => {
  ReactDOM.render(
    <App><Page /></App>,
    document.body.appendChild(document.createElement('div')),
  )
})
