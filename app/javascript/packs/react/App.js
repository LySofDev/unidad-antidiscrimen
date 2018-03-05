import React from 'react'
import ReactDOM from 'react-dom'
import { withContext } from 'recompose'
import PropTypes from 'prop-types'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import ApolloClientProvider from './components/ApolloClientProvider'

import { Form as LoginForm } from './components/Login'

export default () => (
  <ApolloClientProvider>
    <MuiThemeProvider>
      <LoginForm />
    </MuiThemeProvider>
  </ApolloClientProvider>
)
