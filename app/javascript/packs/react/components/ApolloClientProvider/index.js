import React from 'react'
import { withContext, getContext } from 'recompose'
import PropTypes from 'prop-types'
import client from './client'

const clientProps = { apollo: PropTypes.object.isRequired }

export const withApolloClient = withContext(clientProps, props => ({ apollo: client }))

export const getApolloClient = getContext(clientProps)

export default withApolloClient(({ children }) => <div>{children}</div>)
