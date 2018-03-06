import { compose, withHandlers } from 'recompose'
import gql from 'graphql-tag'
import { getApolloClient } from '../ApolloClientProvider'

export default compose(
  getApolloClient,
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
    })
  })
)
