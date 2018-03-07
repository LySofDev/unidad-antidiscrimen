import React from 'react'
import { getApolloClient } from '../ApolloClientProvider'
import gql from 'graphql-tag'

class RegisterUser extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      errors: []
    }
    this.registrationQuery = this.registrationQuery.bind(this)
    this.handleResponse = this.handleResponse.bind(this)
    this.registerUser = this.registerUser.bind(this)
  }

  registrationQuery(credentials) {
    return this.props.apollo.mutate({
      mutation: gql`
        mutation registerUser(
          $email: String!,
          $firstName: String!,
          $lastName: String!,
          $password: String!,
          $passwordConfirmation: String!
        ) {
          registerUser(
            email: $email,
            password: $password,
            passwordConfirmation: $passwordConfirmation,
            firstName: $firstName,
            lastName: $lastName
          ) {
            token
            errors
          }
        }
      `,
      variables: {...credentials}
    })
  }

  handleResponse(response) {
    const registerUser = response.data.registerUser
    if (registerUser && registerUser.token) {
      this.setState({ errors: [] })
      this.props.onSuccess(registerUser.token)
    } else if (registerUser && registerUser.errors) {
      this.setState({ errors: registerUser.errors })
    } else {
      this.setState({ errors: ["Invalid email or password."]})
    }
  }

  registerUser(credentials) {
    this.registrationQuery(credentials)
      .then(this.handleResponse)
      .catch(error => this.setState({ errors: [error] }))
  }

  render() {
    const strategy = this.props.strategy
    if (strategy) {
      return strategy({
        registerUser: this.registerUser,
        errors: this.state.errors
      })
    }
    return null
  }
}

export default getApolloClient(RegisterUser)
