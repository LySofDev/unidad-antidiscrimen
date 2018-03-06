import React from 'react'
import { compose, withStateHandlers, getContext, withHandlers } from 'recompose'
import PropTypes from 'prop-types'
import gql from 'graphql-tag'

const enhance = compose(

  getContext({
    apollo: PropTypes.object.isRequired
  }),

  withHandlers({

    authenticateUser: props => form => props.apollo.mutate({
      mutation: gql`
        mutation authenticateUser(
          $email: String!,
          $password: String!
        ) {
          authenticateUser(
            email: $email,
            password: $password
          ) {
            token
            errors
          }
        }
      `,
      variables: {...form}
    }),

    onSuccess: props => response => {
      console.log(response)
    },

    onFailure: props => error => {
      console.log(error)
    }

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
        props.authenticateUser(state.form)
          .then(props.onSuccess)
          .catch(props.onFailure)
      }
    }
  ),

)

export default enhance(
  ({ form, errors, updateField, submitForm, children }) => {
    return children({ form, errors, updateField, submitForm })
  }
)

// export default function(props) {
//
//   const form = {
//     email: "",
//     password: ""
//   }
//
//   const errors = []
//
//   const authenticateUser =
//
//   return props.children({ form, errors, updateField, submitForm })
// }
