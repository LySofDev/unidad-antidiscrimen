import React from 'react'
import { compose, withStateHandlers, getContext, withHandlers, withState } from 'recompose'
import PropTypes from 'prop-types'

import { withErrors } from '../Errors'

import withAuthenicateUserMutation from './withAuthenticateUserMutation'

import withFormState from './withFormState'

import { withUpdateFlash } from '../Flash'

const enhance = compose(

  withErrors,

  withUpdateFlash,

  withAuthenicateUserMutation,

  withFormState(
    { email: "", password: "" },
    (form, props) => {
      props.authenticateUser(form)
        .then(response => {
          const { authenticateUser } = response.data
          if (authenticateUser.token) {
            props.updateFlash("Signed in successfully.")
          }
          if (authenticateUser.errors) {
            return props.setErrors(response.data.authenticateUser.errors)
          }
          return props.setErrors(["No data received from server."])
        })
        .catch(error => props.setErrors([error]))
    }
  )

)

export default enhance(
  ({ form, errors, updateField, submitForm, children }) => {
    return children({ form, errors, updateField, submitForm })
  }
)
