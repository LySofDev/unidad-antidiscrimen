import React from 'react'
import ReactDOM from 'react-dom'
import { withContext } from 'recompose'
import PropTypes from 'prop-types'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import ApolloClientProvider from './components/ApolloClientProvider'

import LoginForm from './components/LogIn'

export default () => (
  <ApolloClientProvider>
    <MuiThemeProvider>
      <div className="content">
        <h1>Unidad Antidiscrimen</h1>
        <LoginForm />
      </div>
    </MuiThemeProvider>
  </ApolloClientProvider>
)
