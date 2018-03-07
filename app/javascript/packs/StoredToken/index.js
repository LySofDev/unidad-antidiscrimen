import React from 'react'
import Cookies from 'js-cookie'
import { getApolloClient } from '../ApolloClientProvider'
import gql from 'graphql-tag'

class StoredToken extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      validated: false
    }
    this.tokenValidationQuery = this.tokenValidationQuery.bind(this)
    this.updateToken = this.updateToken.bind(this)
    this.handleResponse = this.handleResponse.bind(this)
  }

  tokenValidationQuery() {
    return this.props.apollo.query({
      query: gql`
        query {
          currentUser {
            id
          }
        }
      `
    })
  }

  updateToken(token) {
    Cookies.set('token', token)
    this.setState({ validated: true })
  }

  handleResponse(response) {
    const currentUser = response.data.currentUser
    if (currentUser && currentUser.id) {
      this.setState({ validated: true })
    }
  }

  componentWillMount() {
    console.log(Cookies.get('token'))
    this.tokenValidationQuery()
      .then(this.handleResponse)
      .catch(error => console.log(error))
  }

  componentWillUpdate(props, state) {
    if (state.validated) {
      props.ifValidToken()
      return false
    }
    return true
  }

  render() {
    const component = this.props.unlessValidToken
    const validated = this.state.validated
    if (!validated && component) {
      return component({
        updateToken: this.updateToken
      })
    }
    return null
  }
}

export default getApolloClient(StoredToken)
