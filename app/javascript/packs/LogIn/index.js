import React from 'react'
import ReactDOM from 'react-dom'
import App from '../App'
import StoredToken from '../StoredToken'
import { withRouter } from '../RouterProvider'
import AuthenticateUser from './AuthenticateUser'
import { FormState, FormContainer, FormField } from '../Form'

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
                <FormContainer
                  errors={errors}
                  primaryLabel="Sign Up"
                  onPrimary={event => authenticateUser(form)}
                  secondaryLabel="Not registered yet?"
                  onSecondary={event => redirectTo("/users/sign_up")}
                >
                  <FormField
                    title="Email"
                    value={form.email}
                    onChange={value => updateField('email', value)}
                  />
                  <br />
                  <FormField
                    title="password"
                    value={form.password}
                    onChange={value => updateField('password', value)}
                  />
                  <br />
                </FormContainer>
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
