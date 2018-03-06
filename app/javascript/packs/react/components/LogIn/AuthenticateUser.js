import React from 'react'
import { compose, withStateHandlers, getContext } from 'recompose'
import PropTypes from 'prop-types'

const enhance = compose(

  getContext({
    apollo: PropTypes.object.isRequired
  }),

  withStateHandlers(
    props => ({
      form: {
        email: "",
        password: ""
      },
      errors: []
    }),
    {
      registerError: (state, props) => (error) => ({
        errors: [error]
      }),
      updateField: (state, props) => (field, value) => ({
        form: Object.assign({}, state.form, {
          [field]: value
        })
      }),
      submitForm: (state, props) => (event) => {
        console.log("Form submitted")
        console.log(state)
        console.log(props)
      }
    }
  ),

)

export default enhance(
  ({ form, errors, updateField, submitForm, children }) => {
    return children({ form, errors, updateField, submitForm })
  }
)
