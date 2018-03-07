import React from 'react'
import ReactDOM from 'react-dom'
import App from '../App'
import StoredToken from '../StoredToken'
import Errors from '../Errors'
import { withRouter } from '../RouterProvider'
import AuthenticateUser from './AuthenticateUser'
import { FormState, FormContainer, FormField } from '../Form'

const Page = withRouter(({ redirectTo }) => (
  <StoredToken
    ifValidToken={() => redirectTo("/", { notice: "4001" })}
    unlessValidToken={({ updateToken }) => (
      <AuthenticateUser
        onSuccess={updateToken}
        strategy={({ authenticateUser, errors }) => (
          <FormState
            initialState={{ email: "", password: "" }}
            component={({ form, updateField }) => (
              <FormContainer
                primaryLabel="Sign In"
                onPrimary={event => authenticateUser(form)}
                secondaryLabel="Not registered yet?"
                onSecondary={event => redirectTo("/users/sign_up")}
              >
                <Errors errors={errors} />
                <FormField
                  title="Email"
                  value={form.email}
                  onChange={value => updateField('email', value)}
                />
                <br />
                <FormField
                  title="Password"
                  value={form.password}
                  onChange={value => updateField('password', value)}
                  type="password"
                />
                <br />
              </FormContainer>
            )}
          />
        )}
      />
    )}
  />
))

document.addEventListener('DOMContentLoaded', () => {
  ReactDOM.render(
    <App><Page /></App>,
    document.body.appendChild(document.createElement('div')),
  )
})
