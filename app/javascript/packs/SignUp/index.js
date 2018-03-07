import React from 'react'
import ReactDOM from 'react-dom'
import App from '../App'
import { withRouter } from '../RouterProvider'
import Errors from '../Errors'
import StoredToken from '../StoredToken'
import { FormState, FormContainer, FormField } from '../Form'
import RegisterUser from './RegisterUser'

const Page = withRouter(({ redirectTo }) => (
  <StoredToken
    ifValidToken={() => redirectTo("/?ntc=4002")}
    unlessValidToken={ ({ updateToken }) => (
      <RegisterUser
        onSuccess={updateToken}
        strategy={ ({ registerUser, errors }) => (
          <FormState
            initialState={{
              firstName: "",
              lastName: "",
              email: "",
              password: "",
              passwordConfirmation: ""
            }}
            component={ ({ form, updateField }) => (
              <FormContainer
                errors={errors}
                primaryLabel="Sign Up"
                onPrimary={event => registerUser(form)}
                secondaryLabel="Already a member?"
                onSecondary={event => redirectTo("/users/sign_in")}
              >
                <Errors errors={errors} />
                <FormField
                  title="First Name"
                  value={form.firstName}
                  onChange={value => updateField('firstName', value)}
                />
                <br />
                <FormField
                  title="Last Name"
                  value={form.lastName}
                  onChange={value => updateField('lastName', value)}
                />
                <br />
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
                <FormField
                  title="Password Confirmation"
                  value={form.passwordConfirmation}
                  onChange={value => updateField('passwordConfirmation', value)}
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
