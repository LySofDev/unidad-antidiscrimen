import React from 'react'
import ReactDOM from 'react-dom'
import { withContext } from 'recompose'
import PropTypes from 'prop-types'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import ApolloClientProvider from './components/ApolloClientProvider'

export default () => (
  <ApolloClientProvider>
    <MuiThemeProvider>
      <div className="content">
        <h1>Unidad Antidiscrimen</h1>
      </div>
    </MuiThemeProvider>
  </ApolloClientProvider>
)
