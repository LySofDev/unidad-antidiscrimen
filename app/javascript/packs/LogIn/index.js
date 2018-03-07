import React from 'react'
import ReactDOM from 'react-dom'
import App from '../App'
import FormState from './FormState'
import AuthenticateUser from './AuthenticateUser'
import LoginForm from './Form'
import StoredToken from './StoredToken'

document.addEventListener('DOMContentLoaded', () => {
  ReactDOM.render(
    <App>
      <StoredToken
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
    </App>,
    document.body.appendChild(document.createElement('div')),
  )
})
