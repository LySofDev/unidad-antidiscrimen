import React from 'react'
import { getApolloClient } from '../ApolloClientProvider'
import gql from 'graphql-tag'

class RegisterUser extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      errors: []
    }
  }

  render() {
    const strategy = this.props.strategy
    if (strategy) {
      return strategy({
        registerUser: form => console.log(form),
        errors: this.state.errors
      })
    }
    return null
  }
}

export default getApolloClient(RegisterUser)
