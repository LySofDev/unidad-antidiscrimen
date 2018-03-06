import React from 'react'
import { getApolloClient } from '../ApolloClientProvider'
import gql from 'graphql-tag'


class AuthenticateUser extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      errors: []
    }
    this.authenticationQuery = this.authenticationQuery.bind(this)
    this.authenticateUser = this.authenticateUser.bind(this)
    this.handleResponse = this.handleResponse.bind(this)
  }

  authenticationQuery(credentials) {
    return this.props.apollo.mutate({
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
      variables: {...credentials}
    })
  }

  handleResponse(response) {
    const authenticateUser = response.data.authenticateUser
    if (authenticateUser && authenticateUser.token) {
      this.setState({ errors: [] })
      this.props.onSuccess(authenticateUser.token)
    } else if (authenticateUser && authenticateUser.errors) {
      this.setState({ errors: authenticateUser.errors})
    } else {
      this.setState({ errors: ["Invalid email or password."] })
    }
  }

  authenticateUser(credentials) {
    this.authenticationQuery(credentials)
      .then(this.handleResponse)
      .catch(error => this.setState({ errors: [error] }))
  }

  render() {
    const strategy = this.props.strategy
    if (strategy) {
      return strategy({
        authenticateUser: this.authenticateUser,
        errors: this.state.errors
      })
    }
    return null
  }
}

export default getApolloClient(AuthenticateUser)
